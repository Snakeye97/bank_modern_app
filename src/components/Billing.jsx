import React from 'react'
import { apple,bill,google } from '../assets'
import styles, {layout} from '../style'

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5] ' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> Billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  )

export default Billing