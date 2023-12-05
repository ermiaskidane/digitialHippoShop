import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token}) => {
        return `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}"> Verify account</a>`
      }
    }
  },
  access: {
    read: () => true,
    create: () => true,
    // update: ({ req }) => req.user.role === 'admin',
    // delete: ({ req }) => req.user.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      required: true,
      admin :{
        condition: () =>false
      },

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ]
}
