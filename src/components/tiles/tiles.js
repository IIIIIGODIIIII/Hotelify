import React from "react";
import "./tiles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tile = () => {
  return (
    <>
      <Container fluid="md">
        {/* <div className="tile-grid"> */}
        <div className="bigbox">
          <Row>
            <Col>
              <div className="tile" id="First">
                <a href="/nfc"><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABsFBMVEWQ18///df7xR0AAACytJ6X2dGT2ND//9r//9iujRr//9yS19AAABAAAA5zrqqW2NEAABQAAAb9448AAAX//+B3sq4AABaV3tUABhO4uqOxs52HysP6yCx8vLYABhL/yx6K0MixFRdjkpE3OzrX17rp6sf09dGuFhWFxL8uKxf/5oT95JZgTxtvpKIPFh8eKzEWIihKa209WVvd3eJtERVZEBT/WVf/GhRYgIHIya7IohyeoI5BNxq6lRs/DhZBXV9zdmuMExYcCxVWXFWGiXmYFRYiMzgTHSkzNSxpZEuckWLItnLVvnLdwmrjw17VtlabhkZnWy//3mn91EZyXhpOTTnluR0tQkdAPzD/64zWqx5+ah4eHRSOdB9KQBrp143401i8rnb/4nmNbxmfgx1SVFianqPS0tevsbaBg4Z+ZR1ydXv49/t4eYFDRkwyNT+IfluTKC3cUFPdY2HXGhl9TVI8LDP7cmzbdHWzbG39NjG7DQ1nQ0tDDRT/PTglHiWTYGDdCQf/hIMoDBX9amnHdnNRNz1kCxCwIyJQISb/UE/whIFkaF5kMjR7gHZLT0gLtAEnAAAaHklEQVR4nN1di18aSbZWSxqEbugWkQbk2YCaSDf4GHlEA4KQydy7e2/iyK7GTJJrYmaSiTN7M7vZZNwZx9lNdscr//I9Vc1DoQEtaIU9v2SiiTD98VWdx1enqkZGBtQYxmCwULxmZMRy1ZfdkDEGhmn/j+1eY7C0f9GAGTzs1Z+VARJtOjyMHmYxjBiu/iqbwWCgeNlNGBBI96QdRvZgGZAxNM9KYzZaBofDmBHGNiyTicosmL8hGaCUkQkm4HAwSJGRjKiucDjwAYO29hDbkQufCg7zw5F0YW9x9VEKCIcnJbHQJF0GRi8v2m/fxVBllYDQRvOymzCcdA3Jo1KZxUDF4BDZvzk+ZmR4JhOVMUMzAxm64gUYZIYkqzRQFGiqDjQ0dR2Fu8BBcFhSEuwtrp5cwAy0DUvazNDpQMzw6ECURfawuFEgw2KxDXQJ06O/Ngx8yDZYenpCyxBMJhs9QpKS2AabQVxk9TCJIM73eQb2/+OyjdBHXaxV9vFRqu/Z5/ejr82qSddAO9ERMspoabAMw8JNDwySKDjwShdWcuhfbaMSAK/TIJfsMW26PnyUgv+w1C4WG1UNacOrNoPuB1VjYD6046Kt4K+ugwz2LKob1frgMDj6mlF5C1yxDongDwzSrA8y+nHYb4Q2aoc/LHPQMDRyI53Z/r2bSBjSs3TTT6GnGTo24w2S0U4kG5VG2fFJ9PnAuqzUMs6GXXiV+nsorH2JBujmYslFRWZ5WVlMxjw1kEMl+LetQRnniCNRQmACL8vTLP6qHPKoGPXrQei/tZtMzkCoCJjufX7/i//4z9/97ne///1//fc9DrGJOaeuXRb9NqaNVOm0hIC+e/e/mnzwcMY/Bub3+2e201ssEpNOypbfGzGDTTPpcjoUhL78YvLBzNhF828DxrLH2foSnYzpraUKM6g52JII/eGLPz4Z0zD/zjwSvdcFsd0Yu6RZDJqN/szIIuLvT2riI7bA8Y7rgtgLQiiztVu5AmV074tbzePzPI27HD93PRANth7WJAxtmg0tZfSHrx5chOT376TT235/7fstQbkWVwpRlzrsWrDgr+lFE+je7SaAO1ssx3Hso73tGsbHKHENJNIvQncQ/J0xxGMGn9x6WAe4zyO+WC7HOYHf91dd6jSy6g6Rod7E0Gn/Q0BGT5+NjT27XefRv8dyiZjD4bCGFjl2YaaKWihTP/mlH7KHrKJtSuJMos8nx8YeTE7WfWma50MOKzaHIyRzC9W/nkcxfUk0UHY5EWu/28aGhK+ejD28DQiro9Q/j5IqQIwxJrN7aoozISzqiNDQc+bbRmx2htDnt8bGbgHAyepw3OEUq8ODo6QHYwxxfNXdPEJzvTxBZ+thBnY2Zxk9fTj2BFN4q0ohcOUZcToD1uTdogxFlMxvbY8BRv//oGR3EumKZKjJ9dqWFxDlySqFD2qOFIA4vYk4Lp54mcd/sI/3ITbucMWuCKmSLoZ0HuhDIWNFXz4bm7ndGKQYYciSAFjPXxy8Xlpaer308msZId832+BrussfnfYPtnuxbiN0hEzD756og3SyFivWuDLw9/XS64MXr149f/7q65fw5Ssgcn+ha0jEAsnVSwODbqUZvGsCT8NngK+R1czwHHr1eunrQ1Qz4fmLpaVvkZ1HoS4IIfGleAz9NEqGCSyipzNjk+cGKZD42P7q9Qsoh+VyIplMJhZFFiHlxeuDN6hL5ka9NqGjBORZRF/MzEw2PCmJ+KzyHKFiEqc1YCFhfn+eQ4cvX3+N7B1JxLXnoMlVc5hDjPD2wwZC/y5rF5OOatR3FDnITSdkAX37+iXqME576rLQyxjvXZiHMxcpBFvg5RCmz+v1OsrCHVJO7bLozdJBe4hMu+LsRs3iTaLvHsI8vN1U32/xqByaC3jmQnHhkZrS+Nd86HAJWNT0p0TwHzgGMYch9OUDqCtu+S8i9E884sDVQBxkF2oloj8tA4svkBzQeCdD/wX//ryLN8bHb43NPKs50hkwFc7Y2tYjnp/fTdfr/LGdCR7CyCvUmoDb9BD8+wPR61DAmY41GKxDxCAB3Hlu1yYgUn79WmyqoiwDveTmcSRwUqMFsMW213a5siAevETKRUmTtqv8WixgjaF7DT86M9Ye4Fg6vYBCi+j56zcX/Sk+H2LwwkTdINzhvK1BYVuAMxPpeW5R8aGXB6h4ft3NMtAcjjisIXTvWWOItkXoT0+s8aIgCHZM4mJo7uLq4uCah5A4020Ojvm3J9YWePH7P/2viA5eIAFKx0QIF8o3DaC7WR1JHBI7j1CwiYktfuPt6urqMhRWAvfDn/HyopKIDT5KrzUm8re6MIgjxYQoflhdDS6vc4dLb9Cf/vLurz/8mayhJmIDPmKt1jia7ORDqwC3+JXV1RUeIU4++Bbljlfff4ZRyljrKCbwevi1+NOrn7kBaY04fQvHic4A1x7xH1ZzbNwVVtDLl0gU13NAKUH5o8+OR2wyZjmHUqck1cZcXQeyJLFU0wng9gTY/vTR6rFPCKfyPHpxgHxxDnHsUe7D8erfPvsFUP4k4BGbtAZ0plJ7gbejWYrTT2tZzfb2djM8/3YaA0zf4YOrm1y+gJCIvj5AnOTKnMYRsosrubcqyp9//AlATif0XC+mqUGdd7kvb6sEzhAsazvb+Fs14Z7ZWZsgABf4jdXjE5+C5GQCfXsgsEiKTkXDmVMYoNzGyibm8tf//fvPPwpIjjl1qxMpKhhnCJW+qi7eTzRsLY1trfbtzsK0uLkaFH2cHHNghKi4iPJGk8loHg1nKkAdxx3NQiz526+//Yh0W9+gaAixOB1IeKrWTpC0TKytTWjYWnqeF8Xj1XVACKX/Ih6lZUcchY2jYEbzlDmVkURAya5sHr//5Wck6KT+22xXP9xnTkb3/6gyuDORntjdnUg3g1xL701zPjG3+sEnckWH16ugFy/RojeBzsyjxEwmk3kqkipUACW7vPrLD+iuJokWKpmqPuLbdll0tDL6vCojQmK9h4Pdnf21cyDh6715AS36xLerK5yCEgGnVxBfvkAJRwhJU6MNgwFrBpTT3Mr732TNJRzS4X/1gxRrL7HQ7LYh69tPaiFvjRWTSQWxvsd7gGwHbG1i77EooHIsIaysvuWkU5hhMHGVpeco5oix8fMICZdGcyTOzX72g7au2mlJo/2pReq4pNttAw87/dUDf22MLqAkVkdlFqicnhaQnWc5GHaLMPXsviDko5kMFIbORfRqSUZObxOHVTOn0Mb7dz7k0QLYocui7ZJG1bdQLW04vcj+9BnRKaBymNgRxRiWR5NIfPWKE8W4XFLKCYBnBe+5fnzMi5EUKju9HE5pFp2BBCqYWxGOmittSKTak2exqQ0IdLttAiXwMv70ws7M9g6OCPy01YshltGbJUjLkniRG8vCjjmFza3mUHYqKiPwpM8h8bY6PTIKmzQQmlLo5P07O99MYi8b6A02quO1mEX05eTDbd/0XjXmPYZZFsAYZQDxAnEJIno75kZi6OTD8QYAMmeQLJQOXkKNz+B4qAFwdHRK4mZ//bF5MZXp5RQ3OqXLmURx8DJ3+MdVr7nGIu8IrqYcITtAfAlZptU758HLxNzy200hP4WHILI/X2JRzFtE0xGTFoejxhRaX33XpKr2KHTQ6EDOGGLBy2xNP6rGhXRt6QxoC3EA8UBGYoxxjkBSIM6+XVfju/EUrwjLEPikiDaFME4l7kMTiUxve9ZoOGSwl7nl3+d9+1WAd2pCrwdDFNGbl0uvoCQKecB5LgdnuYoZM2Yyu/I4e5EyEBvgO7OxlUejC62//3uDREPv3bcU5UpAQd+Bl+FrkzC9JRSt1UeawxBlVHqxdPAcCCuLvk/BI+SqUgYhLxyOjGI3agxnMikNiKMqiTXJke4Ukt7MUvMy/FZ1Eu6xcqyeh3hxG00ZYRoPXiHBtxLMcRKJBOooxBk3mXAlpaicRltGq9GNjoBEkSBkmJvo8AcvI4KXeQxeBicvaexlQt7Gv5OgkYTR+ObF0hISN4PrKGMeNYNdmG/hUrGoFPOjzSyajAr74dd/YBLVjc3XLheDl7F/8cz/Df9oIr0/z3Hz+yLkmed/gkCM3QWMpUNuJbjJ/hQ1jdYBYhLJn5FIxFVU3K0kZtAKkBhnSNJ1/YuKzByHwMtM8OJ+eoFFiiJwaNERuPAjHrXjK6HYOaDwCBWmGgBHo+Fw1ExgmUxTbiXfOhGNMvv2L3+G+Kqf4N/xXcHLTM7s8PxuepeLh6zWkFK0NqcgJPRDUpPg1oObIhcx1QeoyZiPK5VC2GzETsYUiSuRFmcDJH78219RUcczEDooXc676A+3H46J/MLEDifGcFpmtXpbf47QaIWELbgCCRsQWK8G45IEEzA/bjZDYehS4q3ZmymK+ONffsLF/vWPUfAyvq+e+B/zd8CHcovVLkvNH51zQBp+EvzEIaCwwaG5UJTyknKoSG6Yh4pUjLaMUhOQuAwk6t6RqmHgZRB4mV0e5zL7wqIn4IHx2OaHmUCZywWXufzUOWdiMkUOixmj6xRCRTyuSEqhNSKaTFEfi0nUv624xeZEdB97mWmcy6xxZUjLRgKBNj/MONDG7Czk3BfDhLFwGI+aR8NZBYM8i2qlp8aCSuK1I2SKWLbYmeZ3sVKRnu/cxuW8KywHvxelpqBuCheVjNlkNEbcmUxYO/82RXgOk6g9/vUxCzjYqpd5xC+oUswa31n543ybsyfThSZXYjSfFaXoqKrNaGVt+J+mzlDuXz9fJ4m4WHaGkAwFheplCEIRWTsEFi9a/7TJKePuizyZjCqJZMIRqU2DR1PELmISvRrvr1OOAxWoQ0BPn/n3ph9hPQ1+7zxSa5w2/0dnjP3np++5isvdHPHM2XjebKoxGo1Eza0Qp7J2TKKeveEXDUKvB4uj/jWe38PJmsDN37F3dOdMiAOEIiB0NSVmpkg2pSY15uh49o30vNDqbkwRtHH8Gy9ohFpdDA/SMvr89sy2yO6m91hUvFtEQimmoYnVLRCblj99kmX3eDOJEOnJX5ijBQiMEP6VNy0QTVOnwmY7YbH/hidhgniZ+ekFKCXYkNfhCJVjnT5gi8dalr//dGTPutwpDX8Csy+jFCG9qRQAZ7ZloJrCmEQBzV1HWmMhXkYEL7PA3plY+wYRlcnh6OjLIf2GlGY2x2uQSCagKQsJjQQZqnkqLJU0stOrkNjbxwBz0OngsJfZ5+V9rFjErCRdC3R8WUBNS9eRNonmM5zQREiVAdl4qqWIIiS+4+ydZkLVettWSc52VmWLtWksWwBCB6keuvyvGSvJS3M+n0uDRFNYKVbCZhIojBFJaUUIuAWsDl9il0anIwK6Qbfh7nI8Rr/8I3iZ6S28JL9LUpnu8hdkrCVC4pnLPd6M0JgB91KtEiN5qaSRvJmIxM+irkMQ9+pTD1NV8AeE94k4SnKZNZZzXGZQBIigH8zx8fFxd7PmBIM0YybLMaPjh0WljcQvzP7anUQL1Zk+qhHBH8AwSXTfv8XPV5W1XQ5davoDiaIvFzxBhdZxChxmpyBvi7qew3w81cCnqsPv3wmaPbfnHpJ+FjJkQQq/2JNE3+3z9po4etkNoYTEo2COlYBEV/M8jBcz4VThjSKBw9EsMIBEiW1Wh1vtEtcUdN9tMxdC96b5ujjaOZc5Z0Ci3bcZ3EAFPE6bhmkBq4mHUjGeb1NgwMcwjo7ev0PxQIeH76XFv6EDAUKW36r2Vexx8qWm4UidxGVM4rg7fNFdGjMSVIhSNjzVBh/+GYX98Jd/dNzD0ENv0bktLHMxmX2cVu0blgtdOlnEbW9QQm3gmdg0FSF1i6ZSWHarVRkaHJrcRFhUtD0lvkiut4MU66uuuNvZt7CwtbW14LOLlweIuzPvohVMIkbobp5uRmNN7G+zEjUaVbi3QKJ2GdrbcbvND5qobtPiFmMXxdHO5gASRUxiBo9TV6vqpAIMK/mIUWs1yqyqw4oWwn5eUxDAmmEoFEomQ/DFJdKousFnsygAiRwmESBqVIIAwxw+PDx0mzQqflM7Ehlywn3/GvyqmTZZtr7S+Q8MkMj5aiTimNEGYkVRpIKrObkzGs0FO1aHW0js9zapQGN3tudq74tJ5D4GP0Ktr0JsTV7MZjNMyAxUUqUmid9oSp0qnKhK/E0I+36Iv8dLzHPlgQ8kIu7TJx9LSMRzsVnTwL+jmYokHcYzF5RVoysfL+VPBS1h0abXTrCrDwwgscwtB1eEvEsbotk4FYXQCKE/e16VMxvHK0opnzJGke/4F7lFHe77weP0hncsbACJnEoiBI0Ls81ojBRIrX8WaWjjJmPUXSwpp+Epo8lcQLl//fUaNakrWzOJALHBlbmGD2rhuqpoMkcyUlzJhs3q+pRK4mUTqRswhyOEuNlNkXOPV82dqiUxECeKMEIxvjp/GF+J4Kt+Cqo6PMAkztVIPHXVIboiRrwsPGpylxQlE6kHQsjlIgUpHj+rlv9kHEeQePzbBrouYVHLuowfK5C4MbvpQ3USyUg1mUfNpmjGHW0Eeqj3C0oJyzemcynOVNa+CSRqt51eeA6dBnLXwAQkFtnl4JG9QaJKo7Gxqk/gmcJn8ZKUwfhGXY1SxBS2c6vvZNT9UXRCaOt6pgHRpFRhsW5Q9qeiF51qOKuU3mB8kAKkpivnZqbEHX/2o94H3LS17rcWOr1WRxxrUkK2TqLLBRABY41CozEF+KRMFLvUTHY0LEmu+uiFWv/4/Q9dj2TQyQBg14NTLJjE9dkcGz9PIimogEfAYZxK5QEflFe4gcGoKGcmKZOvR4+IKBx/+L8bQshcqq0OSCxV1eFzHKouJwW1YapSUiouM8y/yHgYctRKPpN3FasaqgnCxdHs7D9vaJRerr84QEgM5ljlHIk1rO5CJa6cwpgEK0inpYIxqrgrkhtIJPiiBQQlJpQnVynb+mXkwtFLODDGa7XCTJzF6nAzvjNJliuFcASGq9FdiU6lSilz5jQcz46mTCT8y0jMzUKJSbUgTH9Cnfrgl75hr6YO+35yXcSXlUpyJUOGbSoVyRYgD8+emaOlcBhyGvNUpCAjdn1zNgjRlKozo6fDlZgrVKFAYkyGsUbU4XP44vF4JQNT0lWQZCnjOpXGXamzSjiccYXDqZQ7jxB7tBkEgBxapHvIHopIchDfpSuYurCo1H1NJhsvKfkM/t5ViBcyleJ4Rj4bd0vZcTJbMxXcuwn4ZjdXRFSm6suw4Q5/ut02I1c8As5SFRZPsDpM8J0qsnJK+INfEsxPd7zgKsiSckrGbOY54gDfbDC4eeRDbOJK8lDNGHxZiIXmlCUic10tRwqcFxYxvlIc8EFqc1Y5dbskCCOuyikAy2TIv1eEKr4cxnc35qDJu202ch4pQ9FGTXPDAbhT7PV9KOPK5OOAz43HZ6FYKcTPXFnF7SIwCb8FCfj7+AnmX27dh1Ai5mjTO9fZLAaSjcB/rz5Kaa6lxuqwQEjMy1D+uVU0Uh6QgfdRpLPKoZvkqwUFcRvLszD/cicskhNtuh+7Ws3RU518Q3VdpcMaE2Am+tiSdFbFh13MmaQUXC73aSXrJuFRQezJ8iwAzJ1wKE7wOTxX1mQIdSqy67uusqEOuxsRwy1JmVM57yZpXB1fMDi7DPwpSRUfxQPiVKv6sVzfdY4MIfHTJxFlzsX8s7gb/AqJ+ePZOODLEXwbXBWfly5Xw/udql9eoybXpA5XSVRU/wLh34f4Kj4f8If3vVm9ARppm7mxe4mtjpAgYjnjHInjGcKf+5QTfOs5nL589HH2chUfjUtrf9qq/lYTFrn8xfwbwiMriEeYP0hfOFTDR3n0MbxIn5PtLjEuiDqMhcXMBXx50S5CekbwCQ18pNnl6s9h0++agu4IPaom1VCH1fRF8Knp9YpPQIu4/x/in1NdAaWZTTd6TYFDFRZ5X0Z1L+fT6yMWsSq+OfXDwonv4ArdbQwLi2QmQkyEAJh5g1juI4zP2dyRiOS7ZP9GdY/YQB6keAnD6vDJ7OwJJ58WspB+bnzE/OH0U07Ezod3RseTZXU1yL+LXA4qIpZDUD6Q9CV3IiLxAj7SYzGUDFaFRfETTLvllZWcio+rptfn0jMbzXG7N2FMy3WVjBdionCChyb5tbyB00/HRXyWEeYK8sGNGj5to/lJwVcW0cYyCQ84/SxW08/aR1G9pmBIhqhWToI37pWhwj1ZX4f0pRiy1sJ74zXDAq/NVXkB3NERKiP1PihHEz6qg3Iuaf3/4No4fI/anBMLxchhwxfxqZc4DAmHtnY3kXmqrTlWDXzYNO/rGUBjsIygSYZ6foa1kZ4Np3X2FxbPnHfOo9N9BtdhzFDd30thFuxihoQfysfs/+nc+nVZULwzBtd3f6/XtkoKiLbhCWeUKoKO90v33SAloWgUZ2hWem7G8N0fFMPN0rW9ZmAMX/860I/aY6N+//uo+209zvchuGDa0oGD7rcuDYMO1PHQ426b2YZByMO7W+lfbRj8rNJCfQxfv3fb6GSX2FbZzmztytaBMhteP6McpJjDgZ+Etl4OUrTptrzYL8Mn5lKcCdywAU9kSJfFkChVdBPJMjKAt7Npm4Fi8YVhbq7LgsIo0operjS+drPQdVkwBp3cRP/flercVf2WNPputJn9wDv6uhmGIrmnt2GozXqyG23ouQYbpi4LutzJYNPxctt+WmuXxaXMQtVdfCOGq6x2XLQ9dkudgUOSN1to2gaHKemiEvwtw5OSUKpxzMBX13WzUa9NXNsc7M2dEbF5kD1irzmhbhVM3ww7berpMBRdFj2tKg1DlwXFNY5100MH6vvnZelhFlpsQ6ADMd1vFmoHwTIUKQnR7GlZGAIfQxw9/UmRtkFPuhiqLb/n32DQA+HwCP4MZXZ3E3dDUZmBppNHPSdyOACS2uzKh1cPhaOvGVXvn6GdhPf/OnrP7Lex09EAAAAASUVORK5CYII="
                  className="tile-image"
                /></a>
                <div className="tile-info">
                  <h2 className="tile-title">Room Key</h2>
                  <p className="tile-description"></p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="tile" id="Second">
                <div>
                  <a href="/roomservice">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbheH-rqf12kqEEfsdEMpjDdSrPS38TO-8HIUFcJrkOswi2tywbJYDunZkmI7f5dp4Bvi5YDMMqd0&usqp=CAU&ec=48600113"
                      className="tile-image"
                    />
                  </a>
                </div>

                <div className="tile-info">
                  <h2 className="tile-title">Room Service</h2>
                  <p className="tile-description"></p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="tile" id="Third">
                <a href="/order">
                  <img
                    src="data:image/png;base64,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"
                    className="tile-image"
                  />
                </a>
                <div className="tile-info">
                  <h2 className="tile-title">Food Service</h2>
                  <p className="tile-description"></p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="tile" id="Four">
                <a href="/checkin">
                  {" "}
                  <img
                    src="data:image/png;base64,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"
                    className="tile-image"
                  />
                </a>
                <div className="tile-info">
                  <h2 className="tile-title">Check-in</h2>
                  <p className="tile-description"></p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Tile;