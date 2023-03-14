;(function () {

  const get = (target) => {
    return document.querySelector(target)
  }

  const getAll = (target) => {
    return document.querySelectorAll(target)
  }

  class Calculator {
    constructor(element) {
      this.element = element
      this.currentValue = ''
      this.prevValue = ''
      this.operation = null
    }

    // 초기화 값설정
    reset() {
      this.currentValue = ''
      this.prevValue = ''
      this.resetOperation()
    }

    // 숫자 하나 지우기
    clear() {
      if (this.currentValue) {
        this.currentValue = ''
        return
      }
      if (this.operation) {
        this.resetOperation()
        this.currentValue = this.prevValue
        return
      }
      if (this.prevValue) {
        this.prevValue = ''
        return
      }
    }

    appendNumber(number) {
      if (number === '.' && this.currentValue.includes('.')) return
      this.currentValue = this.currentValue.toString() + number.toString()
    }

    setOpertaion(operation) {
      this.resetOperation()
      this.operation = operation
      this.prevValue = this.currentValue
      this.currentValue = ''

      const elements = Array.from(getAll('.operation'))
      const element = elements.filter((element) =>
        element.innerText.includes(operation)
      )[0]
      element.classList.add('active')
    }


    // 계산 연산
    compute() {
      let computation
      const prev = parseFloat(this.prevValue)
      const current = parseFloat(this.currentValue)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentValue = computation.toString()
      this.prevValue = ''
      this.resetOperation()
    }

    // 계산화면 나타내기
    updateDisplay() {
      if (this.currentValue) {
        this.element.value = this.currentValue
        return
      }
      if (this.prevValue) {
        this.element.value = this.prevValue
        return
      }
      this.element.value = 0
    }

    resetOperation() {
      this.operation = null
      const elements = Array.from(getAll('.operation'))
      elements.forEach((element) => {
        element.classList.remove('active')
      })
    }
  }


  // 0~9버튼
  const numberButtons = getAll('.cell_button.number')
  // 연산자버튼
  const operationButtons = getAll('.cell_button.operation')
  // AC
  const allClearButton = get('.cell_button.all_clear')
  // C
  const clearButton = get('.cell_button.clear')
  // =
  const computeButton = get('.cell_button.compute')
  // 화면
  const display = get('.display')

  const calculator = new Calculator(display)

  // 숫자 누르면 화면에 표시해주기
  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.setOpertaion(button.innerText)
      calculator.updateDisplay()
    })
  })


  // 계산완료시 compute, updatedisplay실행
  computeButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
  })


  // 숫자 한개씩 지우기
  clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })


  // 초기화 버튼 reset 시키기
  allClearButton.addEventListener('click', () => {
    calculator.reset()
    calculator.updateDisplay()
  })
})()
