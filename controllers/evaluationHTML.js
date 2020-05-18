const evaluationHTML = (
  firstName,
  lastName,
  gender,
  birthday,
  phone,
  email,
  idNumber,
  martialStatus,
  netWorth,
  visa,
  hadApplied,
  highestDegree,
  from1,
  to1,
  income1,
  from2,
  to2,
  income2,
  from3,
  to3,
  income3) =>{

    return (`
  <h1>客户评估表 Client Assessment Form</h1>


      <p>姓: ${lastName}<p>
      <p>名: ${firstName}</p>
      <p>性别：${gender}</p>
      <p>联系电话：${phone}</p>
      <p>邮箱: ${email}</p>
      <p>证件号码（护照/驾照）: ${idNumber}</p>
      <p>婚姻状况: ${martialStatus}</p>
      <p>含本人及配偶名下之存款、股票、房产现在净值（扣除按揭），公司股权值等: ${netWorth}</p>
      <p>本人持有加拿大签证类别（如旅游、学签、工签等）: ${visa}</p>
      <p>本人或家庭成员是否曾申请过加拿大移民: ${hadApplied}</p>
      <p>已完成的最高学历（已取得证书）: ${highestDegree}</p>

        <h1>最近10 年的主要工作或经营经历 WORK/BUSINESS EXPERIENCE IN LAST 10 YEARS</h1>

        <h3>公司1</h3>
      <p>从: ${from1} <br/> 到:${to1}</p>
      <p>年收入: ${income1}</p>

      <h3>公司2</h3>
      <p>从: ${from2} <br/> 到:${to2}</p>
      <p>年收入: ${income2}</p>
      <h3>公司3</h3>
      <p>从: ${from3} <br/> 到:${to3}</p>
      <p>年收入: ${income3}</p>
`)};

module.exports = evaluationHTML;
