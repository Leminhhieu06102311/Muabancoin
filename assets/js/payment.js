
var quantityList = []
var qttBuyOrSell = function() {
    const quantity = document.querySelector('.quantity')
    const payment = document.querySelector('.payment')
    let sum = 0
    quantity.addEventListener('keydown', function (e) {
        console.log(e)
        if (e.key === '1'
            || e.key === '2'
            || e.key === '3'
            || e.key === '4'
            || e.key === '5'
            || e.key === '6'
            || e.key === '7'
            || e.key === '8'
            || e.key === '9'
            || e.key === '0'
        ) {
            quantityList.push(parseInt(e.key))
            sum = parseInt(quantityList.join('')) * 24.700 * 1000
            sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
            payment.value = sum
        }else if (e.key === 'Backspace' || e.key === 'Delete') {
            quantityList.pop()
            sum = parseInt(quantityList.join('')) * 24.700 * 1000 ? parseInt(quantityList.join('')) * 24.700 * 1000 : sum = 0
            sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
            payment.value = sum

        }else if (e.ctrlKey) {
            if (e.keyCode == 65 || e.keyCode == 97) {
                quantityList = []
                sum = 0
                sum = sum.toLocaleString('vi', { style: 'currency', currency: 'VND' })
                payment.value = sum
            }
        }
    })
}

var submit = function() {
    const checkSell = document.querySelector('.input__group-s.mobile.sell')
    const payment = document.querySelector('.payment')
    const payments = document.querySelector('.content__buy')
    const continute = document.querySelector('.submit')
    const info = []
    let tradingCode = (Math.random() + 3).toString(36).substring(2);
    const yourName = document.querySelector('.your-name')
    const newDate = new Date()
    const bank = document.querySelector("#select-bank")
    const loading = document.querySelector(".pre-loading")
    continute.addEventListener('click', () => {
        if (yourName.value === '' && payment.value <= 0) {
            swal("L???i", "Vui l??ng nh???p ?????y ????? th??ng tin", "error")
        } else if (yourName.value === '') {
            swal("L???i", "Vui l??ng nh???p ?????y ????? t??n", "error")
        } else if (payment.value <= 0) {
            swal("L???i", "Vui l??ng nh???p s??? l?????ng", "error")
        } else {
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
            info.push(payment.value)
            info.push(parseInt(quantityList.join('')))
            info.push(yourName.value)
            info.push(bank.value)
            if (checkSell) {
                const stkSell = document.querySelector('.stk-sell')
                info.push(stkSell.value)
                payments.innerHTML = `
                <div class="content__buy-heading">
                B??n <span class="text-success">WIN</span>
                <div></div>
                </div>
                <div class="content__buy-form">
                <ul>
                    <li>
                        <p>M?? giao d???ch</p>
                        <div class="trading-code">
                            <h2 style="color: #038004;">${tradingCode.toUpperCase()}</h2>
                            <div style="color: #96dff6; font-size: 1.2rem;">Cung c???p m?? giao d???ch n??y n???u b???n c???n h??? tr??? v??? ????n h??ng.</div>
                        </div>
                    </li>
                    <li>
                        <p>Nh???n ti???n qua</p>
                        <p>Chuy???n Kho???n ng??n h??ng</p>
                    </li>
                    <li>
                        <p>T??i kho???n nh???n ti???n</p>
                        <p>${info[4]} (${info[2]})</p>   
                    </li>
                    <li>
                        <p>Ng??n h??ng</p>
                        <p> ${info[3]}</p>
                    </li>
                    <li>
                        <p>S??? ti???n nh???n</p>
                        <p style="font-weight: 600;">${info[0]}</p>
                    </li>
                    <li>
                        <p>S??? l?????ng WIN b??n</p>
                        <p>${info[1]}</p>
                    </li>
                    <li>
                        <p>T??? gi??</p>
                        <p>24.700 ???</p>
                    </li>
                    <li>
                        <p>Ng??y giao d???ch</p>
                        <p>${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}</p>
                    </li>
                    <li>
                        <p>Tr???ng th??i</p>
                        <p style="font-weight: 600; color: #6c757d;">Ch??? thanh to??n...</p>
                    </li>
                    <li style="display: block;">
                        <h3 class="new-title">B???n vui l??ng chuy???n ????ng ${info[1]} WIN v??o</h3>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div>Bi???t danh: </div>
                            <b style="padding: 0 1rem;">SPMuabancoin3</b>
                        </div>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div>Ghi ch?? (Memo):</div>
                            <b style="padding: 0 1rem;">${tradingCode.toUpperCase()}</b>
                        </div>
                    <li style="justify-content: center; padding: 1rem 0;">
                        <div id="app"></div>
                    </li>
                </ul>
                </div>
                `
            } else {
                payments.innerHTML = `
                <div class="content__buy-heading">
                Mua <span class="text-success">WIN</span>
                <div></div>
                </div>
                <div class="content__buy-form">
                <ul>
                    <li>
                        <p>M?? giao d???ch</p>
                        <div class="trading-code">
                            <h2 style="color: #038004;">${tradingCode.toUpperCase()}</h2>
                            <div style="color: #96dff6; font-size: 1.2rem;">Cung c???p m?? giao d???ch n??y n???u b???n c???n h??? tr??? v??? ????n h??ng.</div>
                        </div>
                    </li>
                    <li>
                        <p>T??i kho???n nh???n WIN</p>
                        <p>${info[2]}</p>
                    </li>
                    <li>
                        <p>Ng??n h??ng</p>
                        <p>${info[3]}</p>
                    </li>
                    <li>
                        <p>S??? ti???n c???n tr???</p>
                        <p style="font-weight: 600;">${info[0]}</p>
                    </li>
                    <li>
                        <p>S??? l?????ng WIN nh???n</p>
                        <p>${info[1]}</p>
                    </li>
                    <li>
                        <p>T??? gi??</p>
                        <p>24.700 ???</p>
                    </li>
                    <li>
                        <p>Ng??y giao d???ch</p>
                        <p>${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}</p>
                    </li>
                    <li>
                        <p>Tr???ng th??i</p>
                        <p style="font-weight: 600; color: #6c757d;">Ch??? thanh to??n...</p>
                    </li>
                    <li style="display: block;">
                        <h3 class="new-title">Vui l??ng chuy???n kho???n cho t??i kho???n VCB1 sau:</h3>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div>S??? t??i kho???n: </div>
                            <b style="padding: 0 1rem;">0911000059414</b>
                        </div>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div> T??n ch??? t??i kho???n:  </div>
                            <b style="padding: 0 1rem;">PHAN DINH LONG </b>
                        </div>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div>Chi nh??nh: </div>
                            <b style="padding: 0 1rem;">Tan Son Nhat </b>
                        </div>
                        <div style="display: flex;font-size: 1.6rem;padding: 1rem;">
                            <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                            <div>S??? ti???n:  </div>
                            <b style="padding: 0 1rem;">${info[0]}</b>
                        </div>
                        <div style="font-size: 1.6rem;padding: 1rem;">
                            <div style="display:flex; padding-bottom: .5rem;">
                                <i class="fa-solid fa-arrows-turn-right" style="padding:0 1rem;"></i>
                                <div>N???i dung chuy???n kho???n (memo):</div>
                            </div>
                            <b style="padding-left:3.3rem;">ORD ${tradingCode.toUpperCase()} MBC </b>
                        </div>
                        <div style="padding: 1rem; color: #0dcaf0; font-size: 1.5rem; font-weight: 600;">Ch?? ??: B???n h??y chuy???n ch??nh x??c s??? ti???n (k??? c??? s??? l???) v?? n???i dung chuy???n ti???n nh?? h?????ng d???n (ph???n in ?????m). N???u kh??ng ch??ng t??i s??? kh??ng x??? l??.</div>
                    </li>
                    <li style="display: block;">
                        <p style="width: 100%;">Ch??ng t??i s??? chuy???n WIN v??o t??i kho???n c???a b???n ngay sau khi nh???n ???????c ????ng s??? ti???n v???i n???i dung nh?? tr??n. Ch?? ?? r???ng gi?? WIN bi???n ?????ng li??n t???c, ch??ng t??i s??? ch???t l???i s??? l?????ng WIN ngay khi nh???n ???????c thanh to??n c???a b???n.</p>
                    </li>
                    <li style="justify-content: center; padding: 1rem 0;">
                        <div id="app"></div>
                    </li>
                </ul>
                </div>
                `
            }

            const FULL_DASH_ARRAY = 283;
            const WARNING_THRESHOLD = 10;
            const ALERT_THRESHOLD = 5;

            const COLOR_CODES = {
                info: {
                    color: "green"
                },
                warning: {
                    color: "orange",
                    threshold: WARNING_THRESHOLD
                },
                alert: {
                    color: "red",
                    threshold: ALERT_THRESHOLD
                }
            };

            const TIME_LIMIT = 3000;
            let timePassed = 0;
            let timeLeft = TIME_LIMIT;
            let timerInterval = null;
            let remainingPathColor = COLOR_CODES.info.color;

            document.getElementById("app").innerHTML = `
            <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
                timeLeft
            )}</span>
        </div>
        `;

            startTimer();

            function onTimesUp() {
                clearInterval(timerInterval);
            }

            function startTimer() {
                timerInterval = setInterval(() => {
                    timePassed = timePassed += 1;
                    timeLeft = TIME_LIMIT - timePassed;
                    document.getElementById("base-timer-label").innerHTML = formatTime(
                        timeLeft
                    );
                    setCircleDasharray();
                    setRemainingPathColor(timeLeft);

                    if (timeLeft === 0) {
                        onTimesUp();
                    }
                }, 1000);
            }

            function formatTime(time) {
                const minutes = Math.floor(time / 60);
                let seconds = time % 60;

                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                return `${minutes}:${seconds}`;
            }

            function setRemainingPathColor(timeLeft) {
                const { alert, warning, info } = COLOR_CODES;
                if (timeLeft <= alert.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(warning.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(alert.color);
                } else if (timeLeft <= warning.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(info.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(warning.color);
                }
            }

            function calculateTimeFraction() {
                const rawTimeFraction = timeLeft / TIME_LIMIT;
                return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
            }

            function setCircleDasharray() {
                const circleDasharray = `${(
                    calculateTimeFraction() * FULL_DASH_ARRAY
                ).toFixed(0)} 283`;
                document
                    .getElementById("base-timer-path-remaining")
                    .setAttribute("stroke-dasharray", circleDasharray);
            }
        }

    })
}
submit()
qttBuyOrSell()
