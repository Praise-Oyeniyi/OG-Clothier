import SectionH from '../SectionH';
import CImages from './CImages';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

export default function Collection() {
  return (
    <div className='arrival-container-outer'>
        <SectionH sectionHead={'Collections'} sectionNumber={'03'}/>

        <div className="c-bttm w-[90%] mx-auto mt-12 h-[35rem]">
            <div className="c-bttm-inner flex-center justify-between items-start h-full overflow-x-auto space-x-7 lg:space-x-0">
              <CImages pClass={'lg:!min-w-[49%] lg:min-w-[49%] min-w-full c-1 h-full'}/>

              <div className='lg:max-w-[49%] lg:min-w-[49%] min-w-full h-full lg:flex-column flex-center items-start !justify-between space-x-7 lg:space-x-0'>
                <CImages pClass={'min-w-full c-2 lg:h-[48%] h-full '}/>
                <CImages pClass={'min-w-full c-3 lg:h-[48%] h-full'}/>
              </div>
            </div>
            <div className='max-h-14 my-5 flex-center justify-start space-x-3 lg:hidden'>
                <BsFillArrowLeftCircleFill size={40}/>
                <BsFillArrowRightCircleFill size={40}/>
            </div>
        </div>
    </div>
  )
}
