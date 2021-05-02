import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Homepage', () => {
  it('Should render the heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Ciao' })).toBeInTheDocument()
  })
})
