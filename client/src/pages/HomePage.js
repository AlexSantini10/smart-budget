import React from 'react'

import {TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome} from '../components'
const HomePage = () => {
return (
    <div style={{ width: "60vh", height: "100vh", margin:'auto', display: 'flex', flexDirection: 'column',}}>
        <TopArea/>
        <div style={{height: "80%", position: 'relative', top:0, alignContent: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{textAlign: 'center', marginTop:'-120px'}}>
                <p style={{
                    alignContent: 'center', 
                    color: 'var(--Notion-title, #333437)', 
                    textAlign: 'center', 
                    fontFamily: 'Roboto', 
                    fontSize: '20px', 
                    fontStyle: 'normal', 
                    fontWeight: 500, 
                    lineHeight: 'normal', 
                    letterSpacing: '-0.24px'
                    }}>Il tuo saldo Attuale:</p>

                <div style={{marginLeft: '50px', marginTop:'-40px'}}>
                    <SaldoHome saldoAttuale={100} saldoPassato={1000} valutaRiferimento={'$'}/>
                </div>
            </div>
            <div> 
            <p style={{
                    color: 'var(--Notion-title, #333437)', 
                    textAlign: 'left', 
                    fontFamily: 'Roboto', 
                    fontSize: '20px', 
                    fontStyle: 'normal', 
                    fontWeight: 500, 
                    lineHeight: 'normal', 
                    letterSpacing: '-0.24px',
                    }}>I tuoi ultimi movimenti:</p>
            </div>
        </div>

        <PaperList sx={{}}/>

        <div style={{height: "40%", position: 'relative', bottom:0, display: 'flex', flexDirection: 'column'}}>
            <ButtonArea/>
            <TornaAllaHome/>
        </div>
    </div>
)
}

export default HomePage