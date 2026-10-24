import { useState } from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')

  function calculate(event) {
    event.preventDefault()

    if (firstNumber.trim() === '' || secondNumber.trim() === '') {
      setResult('Please enter both numbers.')
      return
    }

    const first = Number(firstNumber)
    const second = Number(secondNumber)

    if (!Number.isFinite(first) || !Number.isFinite(second)) {
      setResult('Please enter valid numbers.')
      return
    }

    if (operator === '/' && second === 0) {
      setResult('Cannot divide by zero.')
      return
    }

    const answer = {
      '+': () => first + second,
      '-': () => first - second,
      '*': () => first * second,
      '/': () => first / second,
    }[operator]()

    setResult(`Result: ${answer}`)
  }

  function clearCalculator() {
    setFirstNumber('')
    setSecondNumber('')
    setOperator('+')
    setResult('')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 text-gray-900">
      <section className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">Simple Calculator</h1>
        <form className="space-y-4" onSubmit={calculate}>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">First number</span>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              step="any"
              value={firstNumber}
              onChange={(event) => setFirstNumber(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Operation</span>
            <select
              className="w-full rounded border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={operator}
              onChange={(event) => setOperator(event.target.value)}
            >
              <option value="+">Add (+)</option>
              <option value="-">Subtract (-)</option>
              <option value="*">Multiply (×)</option>
              <option value="/">Divide (÷)</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Second number</span>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              step="any"
              value={secondNumber}
              onChange={(event) => setSecondNumber(event.target.value)}
            />
          </label>
          <div className="flex gap-2">
            <button
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              Calculate
            </button>
            <button
              className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              type="button"
              onClick={clearCalculator}
            >
              Clear
            </button>
          </div>
        </form>
        {result && (
          <p className="mt-5 font-medium" aria-live="polite">
            {result}
          </p>
        )}
      </section>
    </main>
  )
}

export default App
