import { ComponentMeta, ComponentStory } from '@storybook/react'

import {
  ReactHookFormDecorator,
  makeActionsProviderDecorator,
  makeDaoInfo,
} from '@dao-dao/storybook'
import { ActionOptionsContextType } from '@dao-dao/types'

import { MigrateContractComponent } from './MigrateContract'

export default {
  title:
    'DAO DAO / packages / stateful / actions / components / MigrateContract',
  component: MigrateContractComponent,
  decorators: [
    ReactHookFormDecorator,
    makeActionsProviderDecorator({
      address: 'junoWalletAddress',
      chainId: 'athena-3',
      bech32Prefix: 'terp',
      context: {
        type: ActionOptionsContextType.Dao,
        info: makeDaoInfo(),
      },
    }),
  ],
} as ComponentMeta<typeof MigrateContractComponent>

const Template: ComponentStory<typeof MigrateContractComponent> = (args) => (
  <MigrateContractComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  fieldNamePrefix: '',
  allActionsWithData: [],
  index: 0,
  data: {},
  isCreating: true,
  onRemove: () => alert('remove'),
  errors: {},
  options: {
    onContractChange: (contract) => alert('onContractChange: ' + contract),
    contractAdmin: 'contractAdmin',
  },
}
