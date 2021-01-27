import * as React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Icon } from '@material-ui/core';
import Link from 'next/link'


const actions = [
    {
        icon: <Icon className="fab fa-whatsapp" style={{ color: "#25d366" }} />,
        name: 'WhatsApp',
        onPress: () => {
            open("https://wa.me/5511953325036", "_blank");
        }
    },
    {
        icon: <Icon className="fab fa-linkedin" style={{ color: "#0a66c2" }} />,
        name: 'LinkedIn',
        onPress: () => {
            open("https://www.linkedin.com/in/arthursantos1996/", "_blank")
        }
    },
    {
        icon: <Icon className="fab fa-github" />,
        name: 'Github',
        onPress: () => {
            open("https://github.com/alvesarthur1996", "_blank")
        }
    },
    {
        icon: <Icon className="fas fa-file-pdf" style={{ color: "#cc2014" }} />,
        name: 'Currículo',
        onPress: () => {
            open("/Curriculo_Arthur_Santos.pdf")
        }
    },
    {
        icon: <Icon className="fas fa-envelope" style={{ color: "#000" }} />,
        name: 'Email',
        onPress: () => {
            open("mailto:arthur_alves.santos@outlook.com.br")
        }
    },
];

export default function FAB() {
    const [direction, setDirection] = React.useState('up');

    return (
        <div className="_fab">
            <SpeedDial
                ariaLabel="Opções"
                className="_fab--btn"
                icon={<SpeedDialIcon />}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={action.onPress}
                    />
                ))}
            </SpeedDial>
        </div>
    );
}
