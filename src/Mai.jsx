const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    padding: 8,
    border: "1px solid #ddd",
  }
  
  const tableCellStyle = {
    padding: 8,
    border: "1px solid #ddd",
    color: "blue",
  }
  
  export default function F12Main() {
    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
        <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>URL</th>
              <th style={tableHeaderStyle}>Page</th>
            </tr>
          </thead>
          <tbody>
  <tr>
              <td style={tableCellStyle}><a href='/Frame48098219'>/Frame48098219</a></td>
              <td style={tableCellStyle}><a href='/Frame48098219'>Frame 48098219</a></td>
            </tr>
  <tr>
              <td style={tableCellStyle}><a href='/PhonePlp'>/PhonePlp</a></td>
              <td style={tableCellStyle}><a href='/PhonePlp'>Phone/PLP</a></td>
            </tr>
  <tr>
              <td style={tableCellStyle}><a href='/WebPlpHiddenFilter'>/WebPlpHiddenFilter</a></td>
              <td style={tableCellStyle}><a href='/WebPlpHiddenFilter'>Web/PLP/Hidden Filter</a></td>
            </tr>
  <tr>
              <td style={tableCellStyle}><a href='/WebPlpWithFilter'>/WebPlpWithFilter</a></td>
              <td style={tableCellStyle}><a href='/WebPlpWithFilter'>Web/PLP/With Filter</a></td>
            </tr>
  <tr>
              <td style={tableCellStyle}><a href='/WebPlpWithFilterExpanded'>/WebPlpWithFilterExpanded</a></td>
              <td style={tableCellStyle}><a href='/WebPlpWithFilterExpanded'>Web/PLP/With Filter Expanded</a></td>
            </tr>
  </tbody>
        </table>
      </div>
    );
  }