import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Helper function to parse form data with files
async function parseFormData(request: NextRequest) {
  const formData = await request.formData()
  
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    projectDescription: formData.get('projectDescription') as string,
  }
  
  const files = formData.getAll('files') as File[]
  
  return { data, files }
}

export async function POST(request: NextRequest) {
  try {
    const { data, files } = await parseFormData(request)
    
    // Validate required fields
    if (!data.name || !data.email || !data.projectDescription) {
      return NextResponse.json(
        { error: 'Namn, e-post och projektbeskrivning är obligatoriska fält' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Ogiltig e-postadress' },
        { status: 400 }
      )
    }
    
    // Process uploaded files
    const attachments = []
    
    for (const file of files) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        // Validate file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          return NextResponse.json(
            { error: `Filen ${file.name} är för stor. Maximal storlek är 10MB.` },
            { status: 400 }
          )
        }
        
        // Validate file type
        const allowedTypes = [
          'image/jpeg', 'image/png', 'image/gif', 'image/webp',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]
        
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { error: `Filtypen för ${file.name} är inte tillåten.` },
            { status: 400 }
          )
        }
        
        attachments.push({
          filename: file.name,
          content: buffer,
        })
      }
    }
    
    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2a2a2a; border-bottom: 2px solid #2a2a2a; padding-bottom: 10px;">
          Ny kontaktförfrågan från webbsidan
        </h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 5px;">Kontaktinformation:</h3>
          <p><strong>Namn:</strong> ${data.name}</p>
          <p><strong>E-post:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 5px;">Projektbeskrivning:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2a2a2a;">
            ${data.projectDescription.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        ${attachments.length > 0 ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 5px;">Bifogade filer:</h3>
            <ul>
              ${attachments.map(att => `<li>${att.filename}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>Detta meddelande skickades från kontaktformuläret på Norms Nickeri webbsida.</p>
          <p>Datum: ${new Date().toLocaleString('sv-SE')}</p>
        </div>
      </div>
    `
    
    // Send email
    const emailResult = await resend.emails.send({
      from: 'Norms Snickeri Webbsida <noreply@normsnickeri.se>',
      to: process.env.CONTACT_EMAIL || 'info@normsnickeri.se',
      subject: `Ny kontaktförfrågan från ${data.name}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    })
    
    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json(
        { error: 'Ett fel uppstod när meddelandet skulle skickas. Försök igen senare.' },
        { status: 500 }
      )
    }
    
    // Send confirmation email to user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2a2a2a; border-bottom: 2px solid #2a2a2a; padding-bottom: 10px;">
          Tack för din förfrågan!
        </h2>
        
        <p>Hej ${data.name},</p>
        
        <p>Tack för att du kontaktade oss. Vi har tagit emot din förfrågan och kommer att höra av oss inom kort.</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2a2a2a; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Din förfrågan:</h3>
          <p><strong>Projekt:</strong> ${data.projectDescription}</p>
          ${attachments.length > 0 ? `<p><strong>Bifogade filer:</strong> ${attachments.length} st</p>` : ''}
        </div>
        
        <p>Med vänliga hälsningar,<br>
        <strong>Norms Nickeri</strong></p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>Detta är en automatisk bekräftelse. Svara inte på detta meddelande.</p>
        </div>
      </div>
    `
    
    await resend.emails.send({
      from: 'Norms Nickeri <noreply@normsnickeri.se>',
      to: data.email,
      subject: 'Bekräftelse - Din förfrågan har mottagits',
      html: confirmationHtml,
    })
    
    return NextResponse.json(
      { 
        message: 'Meddelandet har skickats framgångsrikt!',
        emailId: emailResult.data?.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Ett oväntat fel uppstod. Försök igen senare.' },
      { status: 500 }
    )
  }
}