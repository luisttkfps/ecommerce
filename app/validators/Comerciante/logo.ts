import vine from '@vinejs/vine'

export const updateLogoValidator = vine.compile(
  vine.object({
    logo: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
  })
)
