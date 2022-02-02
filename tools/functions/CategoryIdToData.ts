import { useSelector } from 'react-redux';
import { RootState } from '../store';
export function CategoryIdToData(id:number){
    const categories = useSelector( (state : RootState) => state.categories.value);
    const category = categories.find(c => c.id === id);
    return category?.name
}