import React from "react";
import "./paginado.css"

export default function Paginado({paginado, allRecipes, recipePerPage, currentPage}){

    let page = []

        for (let i = 0; i <= Math.ceil(allRecipes/recipePerPage); i++) {
            page.push(i + 1)
        }

    return(
        <div className="paginadoListas">
            <nav>
                <ul className="paginado">
                    {page &&
                    page.map(e=> (
                        <li className="page" key={e}>
                            <button className={e === currentPage ? "btnListas1": "btnListas"} onClick={()=> paginado(e)}>{e}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}