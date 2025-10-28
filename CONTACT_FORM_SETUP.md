# Contact Form Setup Instructions

The contact form has been implemented with full functionality including file uploads and email sending. Here's what you need to do to make it work:

## Email Service Setup

### Option 1: Resend (Recommended)
1. Sign up for a free account at [resend.com](https://resend.com)
2. Verify your domain or use their test domain for development
3. Get your API key from the Resend dashboard
4. Add it to your `.env.local` file:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   CONTACT_EMAIL=info@normsnickeri.se
   ```

### Option 2: Alternative Email Services
If you prefer to use a different email service, you can modify the API route at `src/app/api/contact/route.ts` to use:
- Nodemailer with SMTP
- SendGrid
- Mailgun
- Any other email service

## Features Implemented

✅ **Form Validation**: Client-side and server-side validation using Zod and react-hook-form
✅ **File Upload**: Drag & drop support with file type and size validation
✅ **Email Sending**: Professional HTML email templates
✅ **Confirmation Emails**: Users receive confirmation of their submission
✅ **Error Handling**: Comprehensive error messages in Swedish
✅ **Loading States**: Visual feedback during form submission
✅ **File Management**: Preview selected files with ability to remove them

## File Upload Specifications

- **Maximum files**: 5 per submission
- **File size limit**: 10MB per file
- **Allowed file types**: 
  - Images: JPEG, PNG, GIF, WebP
  - Documents: PDF, Word (.doc, .docx)
- **Storage**: Files are temporarily processed and attached to emails

## Testing

To test the contact form:

1. Start the development server: `npm run dev`
2. Navigate to the contact form section on your website
3. Fill out the form with valid data
4. Upload some test files (optional)
5. Submit the form

**Note**: Without a valid Resend API key, the form will show an error message, but all other functionality (validation, file upload UI) will work perfectly.

## Production Deployment

1. Set up your domain with Resend
2. Add the production environment variables to your hosting platform
3. Test the form on your live site
4. Monitor email delivery in the Resend dashboard

## Customization

The email templates and form styling can be easily customized:
- **Email templates**: Edit the HTML in `src/app/api/contact/route.ts`
- **Form styling**: Modify the Tailwind classes in `src/components/sections/contact-form-section.tsx`
- **Validation**: Update the schema in `src/lib/validations/contact-form.ts`

## Security Features

- Input sanitization and validation
- File type restrictions
- File size limits
- Email format validation
- Rate limiting ready (can be added to the API route)