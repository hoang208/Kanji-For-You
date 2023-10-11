import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './KanjiDetails.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function KanjiDetails(){
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "GET_COLLECTION", payload: params.kanji });
        dispatch({ type: "GET_DETAILS", payload: params.kanji });
      }, []);

}