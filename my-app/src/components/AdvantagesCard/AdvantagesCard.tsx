interface AdvantagesCardProps {
    IconSrc: string;
    AdvantagesTitle: string;
    AdvantagesText: string;
}

const AdvantagesCard = ({IconSrc, AdvantagesTitle, AdvantagesText}: AdvantagesCardProps) => {
    return(
        <>
            <div className="feature-item">
            <img src={IconSrc} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{AdvantagesTitle}</h3>
            <p>{AdvantagesText}</p>
            </div>
        </>
    )
}

export default AdvantagesCard;