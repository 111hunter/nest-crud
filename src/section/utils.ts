import * as crypto from 'crypto'
import { JWT_SECRET } from 'config'

export function cryptoPassword(password: string) {
    const hmac = crypto.createHmac('sha256', JWT_SECRET)
    return hmac.update(password).digest('hex')
}
