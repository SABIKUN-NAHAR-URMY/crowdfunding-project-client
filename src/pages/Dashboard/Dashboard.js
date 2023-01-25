import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = '3ff44cfc647b476b189bcca953c6dda0';

    const navigate = useNavigate();


    const handelAddBlog = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        title: data.title,
                        image: imgData.data.url,
                        date: data.date,
                        author: data.author,
                        authorImg: data.authorImg,
                        details: data.details,
                        ourWorksTitle: data.ourWorksTitle,
                        ourWorks: data.ourWorks
                    }

                    fetch(' https://code-kids-project-server.vercel.app/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                toast.success(`Blog added successfully`);
                                navigate('/blogs');
                            }
                        })
                }
            })
    }


    return (
        <div className='w-96 p-7 '>
        <h3 className="text-3xl">Add Blog</h3>

        <form onSubmit={handleSubmit(handelAddBlog)}>
            {/* title  */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Title</span></label>
                <input type='text' {...register("title",
                    { required: "Title is required" })} className="input input-bordered w-full" />
                {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
            </div>
            {/* Image */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Image</span></label>
                <input type="file"
                    {...register("image",
                        { required: "Image is required" })} className="input input-bordered w-full" />
                {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
            </div>
            {/* Date */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Date</span></label>
                <input type="text"
                    {...register("date",
                        { required: "Date is required" })} className="input input-bordered w-full" />
                {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
            </div>
            {/* author name */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Author Name</span></label>
                <input type="text"
                    {...register("author",
                        { required: "Author name is required" })} className="input input-bordered w-full" />
                {errors.author && <p className='text-red-600'>{errors.author?.message}</p>}
            </div>
            {/* author image url */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Author Image URL</span></label>
                <input type="text"
                    {...register("authorImg",
                        { required: "Author Image is required" })} className="input input-bordered w-full" />
                {errors.authorImg && <p className='text-red-600'>{errors.authorImg?.message}</p>}
            </div>
            {/* Details */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Details</span></label>
                <input type="text"
                    {...register("details",
                        { required: "Details is required" })} className="input input-bordered w-full" />
                {errors.details && <p className='text-red-600'>{errors.details?.message}</p>}
            </div>
            {/* ourWorksTitle */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Our Works Title</span></label>
                <input type="text"
                    {...register("ourWorksTitle",
                        { required: "Our Works Title is required" })} className="input input-bordered w-full" />
                {errors.ourWorksTitle && <p className='text-red-600'>{errors.ourWorksTitle?.message}</p>}
            </div>
            {/* ourWorks */}
            <div className="form-control w-full">
                <label className="label"><span className="label-text">Our Works</span></label>
                <input type="text"
                    {...register("ourWorks",
                        { required: "Our Works is required" })} className="input input-bordered w-full" />
                {errors.ourWorks && <p className='text-red-600'>{errors.ourWorks?.message}</p>}
            </div>

            <input className='btn w-full mt-5' value='Add Blog' type="submit" />

        </form>
    </div>
    );
};

export default Dashboard;