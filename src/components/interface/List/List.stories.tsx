import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { IconItem } from '@storybook/addon-docs';
import { Story } from "@storybook/react";
import Check from '../../../components/icons/Check';
import Transaction from '../../../components/icons/Transaction';
import Button from "../Button";
/* import Modal, { ModalProps } from "./Modal"; */
import Card from "../Card/Card";
export default {
  title: "Components/Interface/List"/* ,
  component: Modal, */
} as Meta;

const Template: Story = (args) => {
  

  return (
    <div>
      
       {/*  <div>hello, am just a div</div> */}
       <p style={{fontSize: '14px', fontWeight: '500', color: '#9747FF', marginBottom: '16px' }}>List - Card - Thumbnail - Compressed</p>
       <div style={{marginBottom: '48px'}}>
       {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, i) => (
         <Card key={i} type="elevated" style={{width: '264px', height: '72px', display: 'inline-flex', marginRight: '16px'}}>
         <img src="" alt="" width={'40px'} height={'40px'} style={{margin: '16px 12px 16px 16px'}} />
         <div style={{margin: '16px 16px 16px 0px'}}>
           <p style={{fontSize: '14px', fontWeight: '600', color: '#151515' }}>{item}</p>
           <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F' }}>{item}</p>
         </div>
       </Card>
       ))}
       </div>
       
       <p style={{fontSize: '14px', fontWeight: '500', color: '#9747FF', marginBottom: '16px' }}>List - Card - Thumbnail - Extended</p>
       <div style={{marginBottom: '48px'}}>
       {[{t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'},
      {t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'},
      {t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'}].map((item, i) => (
        <Card key={i} type="elevated" style={{width: '920px', height: '72px', display: 'flex', marginBottom: '16px'}}>
         <div style={{display: 'flex'}}>
         <div style={{display: 'flex', justifyContent: 'space-between', width: '350px'}}>
         <div style={{display: 'flex'}}>
         <img src="" alt="" width={'40px'} height={'40px'} style={{margin: '16px'}} />
         <div style={{margin: '16px 16px 16px 0px'}}>
           <p style={{fontSize: '14px', fontWeight: '600', color: '#151515' }}>{item.t1}</p>
           <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F' }}>{item.t1}</p>
         </div>
         </div>
         <div>
           <div style={{display: 'flex'}} >
           <Check style={{width: '10px', height: '10px', marginTop: '24.7px', marginRight: '10px'  }} />
       <p style={{marginTop: '15px', fontSize: '14px', fontWeight: '500', color: '#151515'}}>{item.t2}</p>
           </div>
       <p style={{marginLeft: '15px', fontSize: '12px', fontWeight: '500', color: '#5F5F5F'}}>{item.t3}</p>
         </div>
         </div>
         <div style={{display:'flex', padding: '26px 26px 26px 40px', justifyContent: 'space-between'}}>
           <div style={{display: 'flex', marginRight: '90px', alignItems: 'center'}}>
           <Transaction style={{width: '9.5px', height: '9px', marginRight: '17px'}} />
       <p style={{fontSize: '12px', fontWeight: '500', color: '#151515', textDecorationLine: 'underline'}}>{item.t4}</p>
           </div>
           <div style={{display: 'flex', marginRight: '90px', alignItems: 'center'}}>
           <Transaction style={{width: '9.5px', height: '9px', marginRight: '17px'}} />
       <p style={{fontSize: '12px', fontWeight: '500', color: '#151515', textDecorationLine: 'underline'}}>{item.t5}</p>
           </div>
           <div style={{display: 'flex', alignItems: 'center'}}>
       <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F', marginRight: '17px'}}>{item.t6}</p>
           <Transaction style={{width: '9.5px', height: '9px'}} />
           </div>
         </div>
         </div>
       </Card>
      ))}
       </div>
       
       <p style={{fontSize: '14px', fontWeight: '500', color: '#9747FF', marginBottom: '16px' }}>List - Card - No Thumbnail - Extended</p>
       <div>
       {[{t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'},
      {t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'},
      {t1: 'Lorem Ipsum', t2: '0.075', t3: '$00.00', t4: '0x123...7890', t5: '0x123...6543', t6: '00 minitues ago'}].map((item, i) => (
        <Card key={i} type="elevated" style={{width: '920px', height: '72px', display: 'flex', marginBottom: '16px'}}>
         <div style={{display: 'flex'}}>
         <div style={{display: 'flex', justifyContent: 'space-between', width: '350px'}}>
         <div style={{margin: '16px 16px 16px 16px'}}>
           <p style={{fontSize: '14px', fontWeight: '600', color: '#151515' }}>{item.t1}</p>
           <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F' }}>{item.t1}</p>
         </div>
         
         <div>
           <div style={{display: 'flex'}} >
           <Check style={{width: '10px', height: '10px', marginTop: '24.7px', marginRight: '10px'  }} />
       <p style={{marginTop: '15px', fontSize: '14px', fontWeight: '500', color: '#151515'}}>{item.t2}</p>
           </div>
         
       <p style={{marginLeft: '15px', fontSize: '12px', fontWeight: '500', color: '#5F5F5F'}}>{item.t3}</p>
         </div>
         
         </div>
         <div style={{display:'flex', padding: '26px 26px 26px 40px', justifyContent: 'space-between'}}>
           <div style={{display: 'flex', marginRight: '90px', alignItems: 'center'}}>
           <Transaction style={{width: '9.5px', height: '9px', marginRight: '17px'}} />
       <p style={{fontSize: '12px', fontWeight: '500', color: '#151515', textDecorationLine: 'underline'}}>{item.t4}</p>
           </div>
           <div style={{display: 'flex', marginRight: '90px', alignItems: 'center'}}>
           <Transaction style={{width: '9.5px', height: '9px', marginRight: '17px'}} />
       <p style={{fontSize: '12px', fontWeight: '500', color: '#151515', textDecorationLine: 'underline'}}>{item.t5}</p>
           </div>
           <div style={{display: 'flex', alignItems: 'center'}}>
       <p style={{fontSize: '12px', fontWeight: '500', color: '#5F5F5F', marginRight: '17px'}}>{item.t6}</p>
           <Transaction style={{width: '9.5px', height: '9px'}} />
           </div>
         </div>
         </div>
       </Card>
      ))}
       </div>
    </div>
  );
};

export const Default = Template.bind({});
/* Default.args = { title: "Buy Shares", mode: 'light',
width: '1000px', height: '1000px', paddingTop: '20px', paddingRight: '20px', paddingBottom: '20px', paddingLeft: '20px' }; */
