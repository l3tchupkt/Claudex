import type { Command } from '../../commands.js'
import { shouldInferenceConfigCommandBeImmediate } from '../../utils/immediateCommand.js'

export default {
  type: 'local-jsx',
  name: 'provider',
  description: 'Set up and save a third-party provider profile for Claudex',
  get immediate() {
    return shouldInferenceConfigCommandBeImmediate()
  },
  load: () => import('./provider'),
} satisfies Command
