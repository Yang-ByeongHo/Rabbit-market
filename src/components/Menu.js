import React from 'react'
import './Menu.css'
export default function menu() {
  return (
    <div>
        <table className = 'table' border = '1'>
          <tbody>

            <tr className = 'tr2'>
                <td>인기매물</td>
                <td>생활가전</td>
                <td>패션/잡화</td>
                <td>가공식품</td>
                <td>뷰티/미용</td>
                <td>가구/인테리어</td>
                <td>디지털기기</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
