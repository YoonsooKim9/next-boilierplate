const env = process.env.NEXT_PUBLIC_ENV || 'development'

const configs = {
  local: {},
  development: {},
  production: {},
}[env]

export default configs

export interface PublicConfig {}

export const publicConfig: PublicConfig = {}
