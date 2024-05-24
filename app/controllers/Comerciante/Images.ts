import ComercianteImageService from '#services/Comerciante/image_comerciante_service'
import { updateBannerValidator } from '#validators/Comerciante/arquivos'
import { updateLogoValidator } from '#validators/Comerciante/logo'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ComercianteImagesController {
  constructor(private imageService: ComercianteImageService) {}

  async updateBanner({ request, auth }: HttpContext) {
    const { banner } = await request.validateUsing(updateBannerValidator)
    const user = auth.use('comerciante').user!
    await this.imageService.save({ file: banner, folder: 'banner', id: user?.id_comerciante })
    //await banner.move(app.makePath('uploads'))

    return banner
  }

  async updateLogo({ request, auth }: HttpContext) {
    const { logo } = await request.validateUsing(updateLogoValidator)
    const user = auth.use('comerciante').user!
    await this.imageService.save({ file: logo, folder: 'LOGO', id: user?.id_comerciante })
    //await banner.move(app.makePath('uploads'))

    return logo
  }
}
