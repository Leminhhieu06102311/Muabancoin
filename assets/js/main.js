var renderHistory = () => {
  const date = new Date()
  const users = [
    {
      name: 'Ngô Thị Viên',
      comment: 'nạp và rút nhanh, uy tín',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Hoài thương',
      comment: 'Mua bán uy tín,nhanh',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Trần Quang Lộc',
      comment: 'Nạp rút khá là ổn',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Nguyễn Văn Trường',
      comment: 'Rất nhanh',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Thái',
      comment: 'bán nhanh ok',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Ken',
      comment: 'Chuẩn. Uy tín',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'BÙI DUY HOÀNG',
      comment: 'UY TÍN',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Ngô Thị Viên',
      comment: 'nạp và rút nhanh, uy tín',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Hoài thương',
      comment: 'Mua bán uy tín,nhanh',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Trần Quang Lộc',
      comment: 'Nạp rút khá là ổn',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Nguyễn Văn Trường',
      comment: 'Rất nhanh',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Thái',
      comment: 'bán nhanh ok',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'Ken',
      comment: 'Chuẩn. Uy tín',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    {
      name: 'BÙI DUY HOÀNG',
      comment: 'UY TÍN',
      time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
  ]
  let historyList = document.querySelector('.history__list')
  users.map((user) => {
    let html =
      `
      <li class="history__list-item">
        <div class="history__list-item-image">
          <img src="https://muabancoin.io/images/reviews-avatar.png?c44bece212322ed644337d6da77da441" alt="">
        </div>
        <div class="history__list-item-title">
          <p>${user.name}</p>
          <p>${user.comment}</p>
          <p>${user.time}</p>
        </div>
      </li>
      `
    historyList.innerHTML += html
  })
  let count = 1
  function handleChangeHistory() {
    if (count < 44) {
      historyList.style.transform = `translateY(${-count++ * 20}px)`
      pause = count
      historyList.style.opacity = '1'
    } else {
      historyList.style.transform = `translateY(0px)`
      count = 1
      historyList.style.opacity = '0'

    }
  }
  setInterval(() => {
    handleChangeHistory()
  }, 1000)
}
renderHistory()
const loading = document.querySelector(".pre-loading")
var activeBuySell = () => {
  const coinList = document.querySelector('.content__price-coin')
  const sell = document.querySelector('.sell')
  const buy = document.querySelector('.buy')
  const formSell = document.querySelector('.content__buy-form')
  sell.addEventListener('click', function () {
    formSell.innerHTML = `
    <div class="input__group-s mobile">
                                <div class="text-primary title">Số lượng USDTBEP20 Bán</div>
                                <div class="form-input">
                                    <input type="text" value="0" class="quantity">
                                    <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="title">Ngân hàng nhận tiền</div>
                                <div class="form-input">
                                    <input type="number" class="bgc-white">
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="nick-name title">Số tài khoản nhận tiền</div>
                                <div class="form-input">
                                    <input type="number" class="bgc-white">
                                <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class=" title">Tên tài khoản nhận tiền</div>
                                <div class="form-input">
                                    <input type="number" class="bgc-white">
                                <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="title">Số tiền nhận</div>
                                <div class="form-input">
                                    <input type="text" disabled value="0" class="payment">
                                    <span class="buy__form-name">VNĐ</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="title">Chúng tôi còn</div>
                                <div class="form-input">
                                    <input type="number" class="bgc-white" value="1000000" disabled>
                                <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="g-recaptcha continute" data-sitekey="<?php echo $siteKey; ?>"></div>
                            <div class="continute">
                                <button class="submit">
                                    Tiếp tục
                                </button>
                            </div>
    `
    const payment = document.querySelector('.payment')
    const quantity = document.querySelector('.quantity')
    console.log(payment,quantity)
    const quantityList = []
    let sum = 0
    quantity.addEventListener('keypress', (e) => {
      quantityList.push(parseInt(e.key))
      sum = parseInt(quantityList.join('')) * 24.700 * 1000
      sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
      payment.value = sum
    })
    quantity.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace') {
        quantityList.pop()
        console.log(quantityList)
        sum = parseInt(quantityList.join('')) * 24.700 * 1000
        sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
        payment.value = sum
      }
    })
    loading.animate([
      {
        opacity: 1
      }, {
        opacity: 0
      }
    ], {
      duration: 1000
    })
    loading.classList.add('active')
    setTimeout(() => {
      loading.classList.remove('active')
    }, 1000);
    sell.classList.add('active')
    buy.classList.add('active')
    coinList.animate([
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ], {
      duration: 1000
    })
    coinList.innerHTML =
      `
      <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="BTC">Bitcoin</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="ETH">Ethereum</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="USDT">USDT BEP20</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item active">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="WIN">WIN</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Viva">Viva</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Monera">Monera</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Ravo">Ravo</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Vista">Vista</p>
      </div>
      <p style="background-color: #f8d7da; color: #7e2d34;">1.169.108.286 ₫</p>
  </li> 
    `
    const buyFromName = document.querySelectorAll("#buy__form-name")
    const priceCoinItem = document.querySelectorAll('.price__coin-item')
    const nickName = document.querySelector('.nick-name')

    for (var i = 0; i < priceCoinItem.length; i++) {
      priceCoinItem[i].addEventListener('click', (e) => {
        loading.animate([
          {
            opacity: 1
          }, {
            opacity: 0
          }
        ], {
          duration: 1000
        })
        loading.classList.add('active')
        setTimeout(() => {
          loading.classList.remove('active')
        }, 1000);
        let currentBtn = document.querySelector('.price__coin-item.active')
        const textCoin = e.path[0].childNodes[1].children[1].attributes[1].value
        for (var i = 0; i < buyFromName.length; i++) {
          buyFromName[i].innerHTML = textCoin
          nickName.innerHTML = `Biệt danh ${textCoin}`
        }
        currentBtn.classList.remove('active')
        currentBtn.style.backgroundColor = 'white'
        e.path[0].classList.add('active')
        e.path[0].style.backgroundColor = '#d1ecf1'
      })
    }
  })
  buy.addEventListener('click', function () {
    formSell.innerHTML = `
    <div class="input__group-s mobile">
                                <div class="title">Chúng tôi còn</div>
                                <div class="form-input">
                                    <input type="text" value="100000" disabled>
                                    <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="text-primary title">Số lượng cần Mua</div>
                                <div class="form-input">
                                    <input type="number" class="bgc-white quantity" required>
                                <span class="buy__form-name" id="buy__form-name">WIN</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="title"> Số tiền bạn cần trả</div>
                                <div class="form-input">
                                    <input type="text" disabled value="0" class="payment">
                                    <span class="buy__form-name">VNĐ</span>
                                </div>
                            </div>
                            <div class="input__group-s mobile">
                                <div class="title"> Thanh toán qua</div>
                                <div class="form-input">
                                    <select name="" id="select-bank" class="bgc-white">
                                        <option value="Ngân hàng Vietcombank (VCB)">Ngân hàng Vietcombank (VCB)</option>
                                        <option value="Ngân hàng Vietcombank1 (VCB)">Ngân hàng Vietcombank1 (VCB)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="input__group-s mobile">  
                                <div class="nick-name title">Biệt danh WIN</div>
                                <div class="form-input">
                                    <input type="text" placeholder="Biệt danh của bạn" class="bgc-white your-name" required>
                                </div>
                            </div>
                            <div class="g-recaptcha continute" data-sitekey="<?php echo $siteKey; ?>"></div>
                            <div class="continute">
                                <button class="submit">
                                    Tiếp tục
                                </button>
                            </div>
    `
    const payment = document.querySelector('.payment')
    const quantity = document.querySelector('.quantity')
    const quantityList = []
    console.log(quantity)
    let sum = 0
    quantity.addEventListener('keypress', (e) => {
      quantityList.push(parseInt(e.key))
      sum = parseInt(quantityList.join('')) * 24.700 * 1000
      sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
      payment.value = sum
    })
    quantity.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace') {
        quantityList.pop()
        console.log(quantityList)
        sum = parseInt(quantityList.join('')) * 24.700 * 1000
        sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
        payment.value = sum
      }
    })
    loading.animate([
      {
        opacity: 1
      }, {
        opacity: 0
      }
    ], {
      duration: 1000
    })
    loading.classList.add('active')
    setTimeout(() => {
      loading.classList.remove('active')
    }, 1000);
    sell.classList.remove('active')
    buy.classList.remove('active')
    coinList.animate([
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ], {
      duration: 1000
    })
    coinList.innerHTML =
      `
      <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="BTC">Bitcoin</p>
      </div>
      <p class="content__price-coin-js" value="10">1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="ETH">Ethereum</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="USDT">USDT BEP20</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item active">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="WIN">WIN</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li>
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Viva">Viva</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Monera">Monera</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Ravo">Ravo</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li> 
  <li class="price__coin-item">
      <div>
          <img src="https://s3.ap-southeast-1.amazonaws.com/extienso.com/public/uploads/system/2020-12-25/acceptpm_size_64x64.png" alt="">
          <p class="text-coin" data-name="Vista">Vista</p>
      </div>
      <p>1.169.108.286 ₫</p>
  </li> 
    `
    const buyFromName = document.querySelectorAll("#buy__form-name")
    const priceCoinItem = document.querySelectorAll('.price__coin-item')
    const nickName = document.querySelector('.nick-name')
    for (var i = 0; i < priceCoinItem.length; i++) {
      priceCoinItem[i].addEventListener('click', (e) => {
        loading.animate([
          {
            opacity: 1
          }, {
            opacity: 0
          }
        ], {
          duration: 1000
        })
        loading.classList.add('active')
        setTimeout(() => {
          loading.classList.remove('active')
        }, 1000);
        let currentBtn = document.querySelector('.price__coin-item.active')
        const textCoin = e.path[0].childNodes[1].children[1].attributes[1].value
        for (var i = 0; i < buyFromName.length; i++) {
          buyFromName[i].innerHTML = textCoin
          nickName.innerHTML = `Biệt danh ${textCoin}`
        }
        currentBtn.classList.remove('active')
        currentBtn.style.backgroundColor = 'white'
        e.path[0].classList.add('active')
        e.path[0].style.backgroundColor = '#d1ecf1'
      })
    }
  })
}
activeBuySell()
var renderCoin = function () {
  const buyFromName = document.querySelectorAll("#buy__form-name")
  const priceCoinItem = document.querySelectorAll('.price__coin-item')
  const nickName = document.querySelector('.nick-name')
  for (var i = 0; i < priceCoinItem.length; i++) {
    priceCoinItem[i].addEventListener('click', (e) => {
      loading.animate([
        {
          opacity: 1
        }, {
          opacity: 0
        }
      ], {
        duration: 1000
      })
      loading.classList.add('active')
      setTimeout(() => {
        loading.classList.remove('active')
      }, 1000);
      let currentBtn = document.querySelector('.price__coin-item.active')
      const textCoin = e.path[0].childNodes[1].children[1].attributes[1].value
      for (var i = 0; i < buyFromName.length; i++) {
        buyFromName[i].innerHTML = textCoin
        nickName.innerHTML = `Biệt danh ${textCoin}`
      }
      currentBtn.classList.remove('active')
      currentBtn.style.backgroundColor = 'white'
      e.path[0].classList.add('active')
      e.path[0].style.backgroundColor = '#d1ecf1'
    })
  }

}
renderCoin()
var clickActive = function () {
  const loading = document.querySelector(".pre-loading")
  loading.animate([
    {
      opacity: 1
    }, {
      opacity: 0
    }
  ], {
    duration: 1000
  })
  loading.classList.add('active')
  setTimeout(() => {
    loading.classList.remove('active')
  }, 1000);
}

function checkFirstVisit() {
  const loading = document.querySelector(".pre-loading")
  if (document.cookie.indexOf('mycookie') == -1) {
    document.cookie = 'mycookie=1';
  }
  else {
    loading.animate([
      {
        opacity: 1
      }, {
        opacity: 0
      }
    ], {
      duration: 1000
    })
    loading.classList.add('active')
    setTimeout(() => {
      loading.classList.remove('active')
    }, 1000);
  }
}