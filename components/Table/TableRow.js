import React from 'react'

const styles = {
  th: `pb-5 hover:opacity-50 cursor-pointer`,
}

const TableRow = ({ props }) => {
  return (
    <thbody>
      <tr>
        <th className={styles.th}>{props}</th>
      </tr>
    </thbody>
  )
}

export default TableRow
