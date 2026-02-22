import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.debug(`Checking if today is a friday..`)

    const today = new Date()
    const day = today.getDay()

    if (day === 5) {
      core.setFailed(`⛔ Today is a friday! - Do not change anything!`)
    } else {
      core.info(`🎉 Today is not a friday! - Change something!`)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
