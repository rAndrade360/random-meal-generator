import React from 'react';
import './styles.css';

export default function Result({data}) {
    function separe(){
        const igre = [];
        for(let i=1; i<20; i++){
            if(data[`strIngredient${i}`] !== ""){
                igre.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`)
            }else{
                break;
            }
        }
        return igre;
    
    }
    
  return (
    <div className="result">
        <div className="info">
            <aside>
                <div className="header">
                    <img src={data.strMealThumb} alt={data.strMeal}/>
                    <p><strong>Name: </strong>{data.strMeal}</p>
                    <p><strong>Category: </strong>{data.strCategory}</p>
                    <p><strong>Origin: </strong>{data.strArea}</p>
                </div>
                <div className="igredients">
                    <h2>Igredients</h2>
                    <ul>
                        {separe().map(item=>(
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main>
                <h2>Steps</h2>
                <p>{data.strInstructions}</p>
            </main>
            </div>
        <div className="youtube">
            <h2>Video Recipe</h2>
            <iframe
                title="video"
                type="text/html"
                width="640"
                height="385"
                src={`http://www.youtube.com/embed/${data.strYoutube.slice(-11)}`}
                frameborder="0">
            </iframe>
        </div>
    </div>
  );
}
