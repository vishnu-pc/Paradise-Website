import './process.css'
import LineTo from 'react-lineto';

function AboutProcess() {
    return ( 
        <div className = "about-process-element">
            <div className = "about-process-node-grid">
                <div className = "about-process-node-left">
                    <img
                        className = "about-process-node-1"
                        src= "/assets/about/images/about-node-1.jpg"
                        alt="First node"
                    />
                </div>
                <div className='about-process-node-text-left' >The flex property sets the flexible length on flexible items. Note: If the element is not a flexible item, the flex property has no effect. Show demo Default value: 0 1 auto.</div>
            </div>
            <div className = "about-process-node-grid">
                <div className = "about-process-node-right">
                    <img
                        className = "about-process-node-2"
                        src= "/assets/about/images/about-node-1.jpg"
                        alt="First node"
                    />
                </div>
            </div>
            <div className = "about-process-node-grid">
                <div className = "about-process-node-left">
                    <img
                        className = "about-process-node-3"
                        src= "/assets/about/images/about-node-1.jpg"
                        alt="First node"
                    />
                </div>
            </div>
            <div className = "about-process-node-grid">
                <div className = "about-process-node-right">
                    <img
                        className = "about-process-node-4"
                        src= "/assets/about/images/about-node-1.jpg"
                        alt="First node"
                    />
                </div>
            </div>
            <LineTo from="about-process-node-1" to="about-process-node-2" borderStyle='dashed' borderColor='black' borderWidth='0.4vh' delay='0'/>
            <LineTo from="about-process-node-2" to="about-process-node-3" borderStyle='dashed' borderColor='black' borderWidth='0.4vh' delay='0'/>
            <LineTo from="about-process-node-3" to="about-process-node-4" borderStyle='dashed' borderColor='black' borderWidth='0.4vh' delay='0'/>
        </div>
     );
}

export default AboutProcess;