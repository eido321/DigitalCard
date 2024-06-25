import React from 'react';
import File from './File'

function Files({resume, form}) {
    return (
        <div className='filesContainer'>
            <File click={form} text={'Contact Me'}/>
            <File click={resume} text={'Resume'} />

        </div>
    );
}

export default Files;