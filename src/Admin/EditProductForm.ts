import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Button from '../components/Form/Button';
import Label from '../components/Form/Label';
import TextField from '../components/Form/TextField';

interface IFood {
    title: string;
    description: string;
    price: string;
    image: string;
    foodType: string;
}

const EditProductForm: React.FC = () => {
    const [foods, setFoods] = useState<IFood>({ title: '', description: '', price: '', image: '', foodType: '' });
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
        .then(res => res.json())
        .then(data => setFoods(data));
    }, [id])

    const handleUpdate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        
        setFoods(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const updateFood: IFood = {
            title: foods.title,
            description: foods.description,
            price: foods.price,
            image: foods.image,
            foodType: foods.foodType
        };

        // Update operation
        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                swal("Updated", "Update Successfully!", "success");
            }
            history.push('/admin/manage-products');
        })
    }

    return (
        // ... JSX code remains the same
    );
}

export default EditProductForm;
