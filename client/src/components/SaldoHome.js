import * as React from 'react';

export default function SaldoHome({saldoAttuale, saldoPassato, valutaRiferimento}) {
  return (
        <div style={{position:'relative', display: 'flex', flexDirection:'row'}}>
                    <p style={{
                        color: '#38A0FF',

                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        letterSpacing: '-0.24px',
                    }}>
                        {saldoAttuale} {valutaRiferimento}
                    </p>
                    <p style={{
                        color: saldoAttuale - saldoPassato >= 0 ? '#17B142' : 'rgba(241, 51, 51, 0.90)',
                        fontFamily: 'Roboto',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        letterSpacing: '-0.24px',
                        marginLeft: '10px',
                        marginTop: '35px',
                        textAlign: 'left',
                    }}>
                        {saldoAttuale - saldoPassato} {valutaRiferimento}
                        <p style={{marginTop:'-5px'}}>
                            questo mese
                        </p>
                    </p>
        </div>
  );
}