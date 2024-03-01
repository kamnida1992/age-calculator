import iconArrow from './assets/icon-arrow.svg';
import React, {useState} from 'react';
function AgeCalculator(){

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [ageYears, setAgeYears] = useState("");
    const [ageMonths, setAgeMonths] = useState("");
    const [ageDays, setAgeDays] = useState("");
    const [inputErrors, setInputErrors] = useState({ year: false, month: false, day: false });
   
    function CalculateAge(e){
        e.preventDefault();
        setInputErrors({ year: false, month: false, day: false });

        const currentDate = new Date();
        const birthDate = new Date(year, month - 1, day);

        if(birthDate > currentDate) {
            setInputErrors({
                year: parseInt(year, 10) > currentDate.getFullYear(),
                month:  month < 1 || month > 12,
                day: day < 1 || day > 31
              });
              
            return;
        }
        let ageYears = currentDate.getFullYear()  - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();
        
        if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
            ageYears--;
            ageMonths += 12;
        }

        if(ageDays < 0){
            const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getDate() -1 , 0);
            const daysInPrevMonth = prevMonthDate.getDate();
            ageDays += daysInPrevMonth;
            ageMonths--;
        }
        setAgeYears(`${ageYears}`);
        setAgeMonths(`${ageMonths}`);
        setAgeDays(`${ageDays}`);

    }
   
    return (
    <div className="flex justify-center p-16 w-[auto] lg:w-[auto] bg-slate-200  ">

                <div className="
                h-[100%] rounded-br-[6rem] rounded-md
                bg-white w-[100vw] lg:w-[50vw]">

                         <div className="flex gap-5 p-5 items-start">
                            
                            <div>
                            <h1 className={`text-[0.7em] mb-1 font-bold ${inputErrors.day ? 'text-red-500' : 'text-gray-500'}`}>DAY</h1>

                            <input type="number" value={day} onChange={(e) => setDay(e.target.value)} placeholder="DD"
                            className={`lg:h-[50px] lg:w-[110px] h-[50px] w-[70px] rounded-md text-center text-gray-500 font-bold text-xl
                            border border-${inputErrors.day ? 'red-500' : 'black'}`} />
                            {inputErrors.day && <p className=' text-[0.5em] font-bold text-red-500'>Must be a valid day</p>}
                            
                            </div>

                           <div className=''>
                           <h1 className={`text-[0.7em] mb-1 font-bold ${inputErrors.month ? 'text-red-500' : 'text-gray-500'}`}>MONTH</h1>
                            <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="MM"  className={`
                             lg:h-[50px] lg:w-[110px] h-[50px] w-[70px] text-gray-500 rounded-md text-center font-bold text-xl
                             border border-${inputErrors.month ? 'red-500' : 'black'}`} />

                            {inputErrors.month && <p className=' text-[0.5em] font-bold text-red-500'>Must be a valid month</p>}
                            </div>
                            

                            <div>
                            <h1 className={`text-[0.7em] mb-1 font-bold ${inputErrors.year ? 'text-red-500' : 'text-gray-500'}`}>YEAR</h1>
                            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="YYYY"  className={`
                            lg:h-[50px] lg:w-[110px] text-gray-500 h-[50px] w-[70px] rounded-md text-center font-bold text-xl
                            border border-${inputErrors.year ? "red-500" : 'black'}`} />
                            {inputErrors.year && <p className=' text-[0.5em] font-bold text-red-500'>Must be a valid year</p>}
                            </div>

                            <div className="absolute
                            left-[41%] top-[185px] lg:left-[69%] w-[70px] h-[70px] 
                            bg-violet-600 text-center  rounded-full">
                            <button onClick={CalculateAge}>
                                    
                                <img src={iconArrow} className='w-[30px] h-[30px] mt-5' />
                             </button>
                            </div>
                        </div>
                       
                    <div className="px-2 lg:px-10 text-[2.7rem] italic mt-12 leading-10 mb-10">
                        <hr/>
        
                         <div className="p-1 flex gap-5 lg:text-7xl font-black mt-16">
                         <h1>
                            <span className="text-violet-600">{ageYears  ? ageYears : "--"}</span> years
                        </h1>
                         </div>
                         <div className="p-1 flex gap-5 lg:text-7xl font-black">
                        <h1><span className="text-violet-600">{ageMonths  ? ageMonths : "--"}</span> months</h1>
                        </div>
                        <div className="p-1 flex gap-5 lg:text-7xl font-black">
                        <h1><span className="text-violet-600">{ageDays  ? ageDays : "--"}</span> days</h1>
                     </div>
                        
                    </div>
                </div>
        </div>)
}
export default AgeCalculator