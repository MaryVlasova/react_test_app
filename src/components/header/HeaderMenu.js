import React, {useState} from 'react';
import HeaderMenuItem from './HeaderMenuItem.js';


function HeaderMenu () {
    let menuItems = 
        [
            {title: 'Home', active: true, link: ''},
            {title: 'Calculator', active: false, link: ''},
            {title: 'About', active: false, link: ''}
        ]
    ;  
    const [menu, setMenu] = useState(menuItems);
  
    //console.log('menu', menu, typeof menu);

     function hendleClick (index) {
        //console.log('hendleClick HeaderMenu' + index);
        let tempMenu = menu.map((item) => {
            return {title: item.title, active: false};
        });
        tempMenu[index].active = true;
        //console.log('tempMenu' + tempMenu);
        setMenu(tempMenu);
     }


    return (

      
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
           
           {
                menu.map((item, index) => {

                    return <HeaderMenuItem 
                        key={index}                   
                        index={index}
                        title={item.title} 
                        active={item.active} 
                        link={item.link}
                        onClick={hendleClick}
                    />          
                })

           } 
        </ul>

    );
}

export default HeaderMenu;