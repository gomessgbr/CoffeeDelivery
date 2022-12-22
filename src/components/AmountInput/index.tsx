import { AmountInputContainer, IconWrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface AmountProps {
  size?: 'medium' | 'small'
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AmountInput({
  amount,
  onDecrease,
  onIncrease,
  size = 'medium',
}: AmountProps) {
  return (
    <AmountInputContainer size={size}>
      <IconWrapper disabled={amount <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={amount} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AmountInputContainer>
  )
}
