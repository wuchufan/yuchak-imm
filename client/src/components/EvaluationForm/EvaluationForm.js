import React,{ useState } from 'react';
import cls from './EvaluationForm.module.scss';
import { sendEvaluation } from '../../ajax/email';



const EvaluationForm = () => {

  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    gender:'',
    birthday:'',
    phone:'',
    email:'',
    idNumber:'',
    martialStatus:'',
    netWorth:'',
    visa:'',
    hadApplied:'',
    highestDegree:'',
    from1:'',
    to1:'',
    income1:'',
    from2:'',
    to2:'',
    income2:'',
    from3:'',
    to3:'',
    income3:''
  });



  const {
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
    income3

  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  };


  return (<form className={cls['container']} onSubmit={async (e)=>{
    e.preventDefault();

    await sendEvaluation({...formData});
    setFormData({
        firstName:'',
        lastName:'',
        gender:'',
        birthday:'',
        phone:'',
        email:'',
        idNumber:'',
        martialStatus:'',
        netWorth:'',
        visa:'',
        hadApplied:'',
        highestDegree:'',
        from1:'',
        to1:'',
        income1:'',
        from2:'',
        to2:'',
        income2:'',
        from3:'',
        to3:'',
        income3:''
    })


  }}>
    <h1 className={cls['form-title']}>客户评估表 Client Assessment Form</h1>

    <div className={cls['flex-container']}>

      {/* Input Group */}

      <div className={cls['input-grid-container']}>
        <div className={cls['input-box'] + ' ' + cls['input-box--1']}>
          <label className={cls['label']}>姓LAST NAME</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={firstName} type='text' name='firstName'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--2']}>
          <label className={cls['label']}>名FIRST NAME</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={lastName} type='text' name='lastName'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--3']}>
          <label className={cls['label']}>性别GENDER：</label>
          <select value={gender} onChange={(e)=>onChange(e)} className={cls['input']} name='gender'>
            <option className={cls['input__option']} value=''></option>
            <option className={cls['input__option']} value='男M'>男M</option>
            <option className={cls['input__option']} value='女F'>女F</option>
          </select>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--4']}>
          <label className={cls['label']}>出生日期DATE OF BIRTH</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={birthday} type='date' name='birthday'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--5']}>
          <label className={cls['label']}>联系电话PHONE NUMBER</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={phone} type='number' name='phone'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--6']}>
          <label className={cls['label']}>邮箱EMAIL</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={email} type='email' name='email'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--7']}>
          <label className={cls['label']}>证件号码（护照/驾照）ID NUMBER</label>
          <input onChange={(e)=>onChange(e)} className={cls['input']} value={idNumber} type='text' name='idNumber'/>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--8']}>
          <label className={cls['label']}>婚姻状况MARTIAL STATUS</label>
          <select value={martialStatus} onChange={(e)=>onChange(e)} name='martialStatus' className={cls['input']}>
            <option value='' className={cls['input__option']}></option>
            <option value='未婚 SINGLE' className={cls['input__option']}>未婚 SINGLE</option>
            <option value='已婚 MARRIED' className={cls['input__option']}>已婚 MARRIED</option>
            <option value='离婚 DIVORCED' className={cls['input__option']}>离婚 DIVORCED</option>
            <option value='丧偶 WIDOW' className={cls['input__option']}>丧偶 WIDOW</option>
          </select>

        </div>

        <div className={cls['input-box'] + ' ' + cls['input-box--9']}>
          <label className={cls['label']}>
            含本人及配偶名下之存款、股票、房产现在净值（扣除按揭），公司股权值等
            <br/>FAMILY NET WORTH INCLUDING SAVING, STOCKS, LAND AND REAL PROPERTY (AFTER MORTGAGE), BUSINESS CURRENT VALUE, ETC.
          </label>
          <select value={netWorth} onChange={(e)=>onChange(e)} name='netWorth' className={cls['input']}>
            <option className={cls['input__option']} value=''></option>
            <option className={cls['input__option']} value='加币10 万以上OVER CAD 100K'>加币10 万以上OVER CAD 100K</option>
            <option className={cls['input__option']} value='加币20 万以上OVER CAD 200K'>加币20 万以上OVER CAD 200K</option>
            <option className={cls['input__option']} value='加币30 万以上OVER CAD 300K'>加币30 万以上OVER CAD 300K</option>
            <option className={cls['input__option']} value='加币80 万以上OVER CAD 800K'>加币80 万以上OVER CAD 800K</option>
            <option className={cls['input__option']} value='加币160 万以上OVER CAD 1.6 M'>加币160 万以上OVER CAD 1.6 M</option>
            <option className={cls['input__option']} value='加币300 万以上OVER CAD 3 M'>加币300 万以上OVER CAD 3 M</option>
          </select>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--10']}>
          <label className={cls['label']}>本人持有加拿大签证类别（如旅游、学签、工签等）<br/>YOUR HOLDING CANADIAN VISA TYPE</label>
          <select value={visa} onChange={(e)=>onChange(e)} name='visa' className={cls['input']}>
            <option className={cls['input__option']} value=''></option>
            <option className={cls['input__option']} value='旅游'>旅游 VISTOR VISA</option>
            <option className={cls['input__option']} value='学签'>学签 STUDY PERMIT</option>
            <option className={cls['input__option']} value='工签'>工签 WORK PERMIT</option>
          </select>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--11']}>
          <label className={cls['label']}>本人或家庭成员是否曾申请过加拿大移民
            <br/>YOU AND YOUR FAMILY MEMBERS APPLIED FOR IMMIGRATION/VISA TO CANADA?</label>
          <select value={hadApplied} onChange={(e)=>onChange(e)} name='hadApplied' className={cls['input']}>
            <option className={cls['input__option']} value=''></option>
            <option className={cls['input__option']} value='是Yes'>是YES</option>
            <option className={cls['input__option']} value='否No'>否NO</option>
          </select>
        </div>
        <div className={cls['input-box'] + ' ' + cls['input-box--12']}>
          <label className={cls['label']}>已完成的最高学历（已取得证书）HIGHEST GRADE</label>
          <select value={highestDegree} onChange={(e)=>onChange(e)} name='highestDegree' className={cls['input']}>
            <option className={cls['input__option']} value=''></option>
            <option className={cls['input__option']} value='大专 COLLEGE'>大专 COLLEGE</option>
            <option className={cls['input__option']} value='本科 UNIVERSITY'>本科 UNIVERSITY</option>
            <option className={cls['input__option']} value='硕士以上 POST-GRADUATE'>硕士以上 POST-GRADUATE</option>
          </select>
        </div>
      </div>

      {/* Input Group End */}

      {/* Work Experience */}
      <div>

        <h1 style={{textAlign:'center',marginBottom:'2rem'}}className={cls['label']}>
          最近10 年的主要工作或经营经历 WORK/BUSINESS EXPERIENCE IN LAST 10 YEARS
        </h1>
        <div className={cls['firm-grid-container']}>

          <div className={cls['firm']}>
            <div className={cls['input-box']}>
            <label className={cls['label']}>
              公司1 工作或经营期限<br/>
              FIRM1 WORK PERIOD
            </label>
            <div className={'firm__work-period'}>
              <label className={cls['label']}>From</label>
              <input onChange={(e)=>onChange(e)} value={from1} type='date' name='from1' className={cls['input']}/>
              <label className={cls['label']}>to</label>
              <input onChange={(e)=>onChange(e)} value={to1} type='date' name='to1' className={cls['input']}/>
            </div>

            </div>
            <div className={cls['input-box']}>
              <label className={cls['label']}>
                公司1 年收入<br/>
                FIRM1 ANNUAL INCOME
              </label>
              <input onChange={(e)=>onChange(e)} type='number' value={income1} name='income1' className={cls['input']}/>
            </div>

          </div>
          <div className={cls['firm']}>
            <div className={cls['input-box']}>
            <label className={cls['label']}>
              公司2 工作或经营期限<br/>
              FIRM2 WORK PERIOD
            </label>
            <div className={'firm__work-period'}>
              <label className={cls['label']}>From</label>
              <input onChange={(e)=>onChange(e)} value={from2} type='date' name='from2' className={cls['input']}/>
              <label className={cls['label']}>to</label>
              <input onChange={(e)=>onChange(e)} value={to2} type='date' name='to2' className={cls['input']}/>
            </div>

            </div>
            <div className={cls['input-box']}>
              <label className={cls['label']}>
                公司2 年收入<br/>
                FIRM2 ANNUAL INCOME
              </label>
              <input onChange={(e)=>onChange(e)} value={income2} type='number' name='income2' className={cls['input']}/>
            </div>

          </div>
          <div className={cls['firm']}>
            <div className={cls['input-box']}>
            <label className={cls['label']}>
              公司3 工作或经营期限<br/>
              FIRM3 WORK PERIOD
            </label>
            <div className={'firm__work-period'}>
              <label className={cls['label']}>From</label>
              <input onChange={(e)=>onChange(e)} value={from3} type='date' name='from3' className={cls['input']}/>
              <label className={cls['label']}>to</label>
              <input onChange={(e)=>onChange(e)} value={to3} type='date' name='to3' className={cls['input']}/>
            </div>

            </div>
            <div className={cls['input-box']}>
              <label className={cls['label']}>
                公司3 年收入<br/>
                FIRM3 ANNUAL INCOME
              </label>
              <input onChange={(e)=>onChange(e)} value={income3} type='number' name='income3' className={cls['input']}/>
            </div>

          </div>

        </div>
      </div>

    </div>
    <button type='submit' className={cls['button']}>提交 Submit</button>
  </form>);
}

export default EvaluationForm;
