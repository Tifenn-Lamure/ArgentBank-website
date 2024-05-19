import iconPencil from "../../../assets/img/pencil-solid.svg";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPencil } from "@fortawesome/free-solid-svg-icons";


interface DropdownProps {
    transactionDate: string;
    transactionDescription: string;
    transactionAmount: string;
    transactionBalance: string;
    transactionType: string;
    transactionCategory: string;
    transactionNote: string;
}


const CollapseParent = styled.div`
    overflow: hidden;
    width: 80%;
    margin: 0 auto 1em auto;
    text-align: left;
`

const CollapseHead = styled.div`
    z-index: 2;
    position: relative;
    display: grid;
    grid-template-columns: 15% 50% 15% 15% 5%;
    padding: 0.3em;
    align-items: center;
    background-color: white;
`

const CollapseBody = styled.div`
    position: relative;
    max-height: ${({isCollapseActive}) => isCollapseActive ? '100%' : '0'};
    transform: ${({isCollapseActive}) => isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
    z-index: 1;
    transition: all 0.5s;
    background-color:white;
    > *{
        padding: 1rem;
        max-height: ${({isCollapseActive}) => isCollapseActive ? '100%' : '0'};
        transform: ${({isCollapseActive}) => isCollapseActive ? 'translateY(0)' : 'translateY(-100%)'}; 
        transition: all 0.5s;
        overflow: hidden;
    }
`

const CollapseBodyLine = styled.div`
    display: grid;
    grid-template-columns: 15% 50% 15% 15% 5%;
    padding: 0.45em 0.3em;
    align-items: center;
`

const IconChevron = styled(FontAwesomeIcon)`
    transform: ${({isCollapseActive}) => isCollapseActive ? 'rotate(-180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;
`

const ModifyCell = styled.div`
    display: flex;
    gap: 0.3em;
`


const Dropdown = ({transactionDate, transactionDescription, transactionAmount, transactionBalance, transactionType,transactionCategory, transactionNote}:  DropdownProps) => {
    
    const [isCollapseActive, updateCollapseActive] = useState(false);
    
    return(
        // <>
        //     <div className="dropdown-global-data">
        //         <div className="dropdown-main-data">
        //             <div className="dropdown-main-data-text">{transactionDate}</div>
        //             <div className="dropdown-main-data-text">{transactionDescription}</div>
        //             <div className="dropdown-main-data-text">{transactionAmount}</div>
        //             <div className="dropdown-main-data-text">{transactionBalance}</div>
        //             <div className="dropdown-main-data-text">icon chevron ici</div>
        //         </div>
        //         <div className="dropdown-hidden-data-flex">
        //             <div className="dropdown-hidden-data-flex-section">
        //                 <div className="data-title">Transaction type</div>
        //                 <div className="data-input">{transactionType}</div>
        //             </div>
        //             <div className="dropdown-hidden-data-flex-section">
        //                 <div className="data-title">Category</div>
        //                 <div className="data-input">{transactionCategory}</div>
        //                 <img src={iconPencil}></img>
        //             </div>
        //             <div className="dropdown-hidden-data-flex-section">
        //                 <div className="data-title">Note</div>
        //                 <div className="data-input">{transactionNote}</div>
        //                 <img src={iconPencil}></img>
        //             </div>
        //         </div>
        //     </div>
        // </>

        <CollapseParent>
            <CollapseHead onClick={() => updateCollapseActive(!isCollapseActive)}>
                <div>{transactionDate}</div>
                <div>{transactionDescription}</div>
                <div>{transactionAmount}</div>
                <div>{transactionBalance}</div>
                <IconChevron icon={faChevronUp} size="xl" isCollapseActive={isCollapseActive}/>
            </CollapseHead>
            <CollapseBody isCollapseActive={isCollapseActive}>
                <CollapseBodyLine>
                    <div>Transaction type</div>
                    <div>{transactionType}</div>
                </CollapseBodyLine>
                <CollapseBodyLine>
                    <div>Category</div>
                    <ModifyCell>
                        <div>{transactionCategory}</div>
                        <FontAwesomeIcon icon={faPencil} size="sm"/>
                    </ModifyCell>
                </CollapseBodyLine>
                <CollapseBodyLine>
                    <div>Note</div>
                    <ModifyCell>
                        <div>{transactionNote}</div>
                        <FontAwesomeIcon icon={faPencil} size="sm"/>
                    </ModifyCell>
                </CollapseBodyLine>
            </CollapseBody>
        </CollapseParent>

    )
}

export default Dropdown;