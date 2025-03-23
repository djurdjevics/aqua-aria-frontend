import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    handler: async (formData) => {
      const { data, error } = await resend.emails.send({
        from: "contact@aquaaria.rs",
        to: ['office@aquaaria.rs'],
        subject: `AquaAria Contact Form | Nova poruka - ${formData.get('serviceType')}`,
        html: `<div style={{ margin-bottom: '20px' }}>
          ${formData.get('message')}
          <div style={{ margin-top: '20px' }}>
            ${formData.get('firstName')} ${formData.get('lastName')}
          </div>
          <div>
            ${formData.get('phone')} ${formData.get('email')}
          </div>
        </div>`,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};