import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import img from '../../images/campaign.png';

const Campaign = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelCampaign = data => {
        console.log(data);
        // const product = {
        //     productName: data.productName
        // }

        // fetch('https://watchbd-server.vercel.app/products', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //         if (result.acknowledged) {
        //             toast.success(`Product added successfully`);
        //         }
        //     })
    }

    return (
        <div className='lg:w-[900px] mx-auto'>
            <div className='mx-40'>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Let's get ready to start your campaign!</h1>
                <p className='text-2xl text-slate-500 mt-4 text-center'>We want to create the best onboarding for you - please fill out the information below. Your answers will be locked for this campaign and can't be changed later.</p>

                <form onSubmit={handleSubmit(handelCampaign)} className='border mt-10 p-11'>
                    <p className='text-4xl font-bold'>Who are you raising money for?</p>
                    <p className='text-2xl text-slate-500 mt-4'>Please choose the type of account that will be receiving your funds.</p>

                    <div className="form-check mt-3">
                        <label className='text-2xl' htmlFor="Individual">
                            <input
                                {...register('money', { required: true })}
                                type="radio"
                                name="money"
                                value="Individual"
                                className="form-check-input"
                                id="Individual"
                            />{' '}
                            Individual
                        </label>
                    </div>
                    <div className="form-check">
                        <label className='text-2xl' htmlFor="Non-profit">
                            <input
                                {...register('money', { required: true })}
                                type="radio"
                                name="money"
                                value="Non-profit"
                                className="form-check-input"
                                id="Non-profit"
                            />{' '}
                            Burger
                        </label>
                    </div>
                    
                    <div className="text-danger mt-3">
                        {errors.money?.type === 'required' &&
                            'Tell us Who are you raising money for?'}
                    </div>

                    <p className='text-4xl font-bold'>Where are you located?</p>
                    <p className='text-2xl text-slate-500 mt-4'>If you are raising funds as an individual, what is your country of legal residence? If you are raising funds for a business, where is the business headquartered? Learn more about country limitations.</p>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-xl">Select Your Residence Country?</span></label>
                        <select {...register("country",
                            { required: "Country is required" })} className="input input-bordered w-full text-xl">
                            <option className='text-xl' country='Bangladesh'>Bangladesh</option>
                            <option className='text-xl' country='India'>India</option>
                            <option className='text-xl' country='Nepal'>Nepal</option>
                            <option className='text-xl' country='Malaysia'>Malaysia</option>
                            <option className='text-xl' country='Bhutan'>Bhutan</option>
                            <option className='text-xl' country='Finland'>Finland</option>
                            <option className='text-xl' country='England'>England</option>
                            <option className='text-xl' country='Others'>Others</option>
                        </select>
                        {errors.country && <p className='text-red-600'>{errors.country?.message}</p>}
                    </div>

                    <p className='text-4xl font-bold mt-4'>Where is your bank?</p>
                    <p className='text-2xl text-slate-500 mt-4'>Your bank account location determines the currency in which you can raise funds.</p>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-xl">Select a Bank Country?</span></label>
                        <select {...register("bankCountry",
                            { required: "Bank Country is required" })} className="input input-bordered w-full text-xl">
                            <option className='text-xl' bankCountry='Bangladesh'>Bangladesh</option>
                            <option className='text-xl' bankCountry='India'>India</option>
                            <option className='text-xl' bankCountry='Nepal'>Nepal</option>
                            <option className='text-xl' bankCountry='Malaysia'>Malaysia</option>
                            <option className='text-xl' bankCountry='Bhutan'>Bhutan</option>
                            <option className='text-xl' bankCountry='Finland'>Finland</option>
                            <option className='text-xl' bankCountry='England'>England</option>
                            <option className='text-xl' bankCountry='Others'>Others</option>
                        </select>
                        {errors.bankCountry && <p className='text-red-600'>{errors.bankCountry?.message}</p>}
                    </div>

                    {/* Bank section  */}
                    <p className='text-4xl font-bold mt-4'>Your bank name?</p>
                    <p className='text-2xl text-slate-500 mt-4'>Your bank account location determines the currency in which you can raise funds.</p>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-xl">Select a your Bank Name?</span></label>
                        <select {...register("bankName",
                            { required: "Bank Name is required" })} className="input input-bordered w-full text-xl">
                            <option className='text-xl' bankName='Islamic'>Islamic bank</option>
                            <option className='text-xl' bankName='BRAC'>BRAC bank</option>
                            <option className='text-xl' bankName='Sonali'>Sonali Bank</option>
                            <option className='text-xl' bankName='Pubali'>Pubali Bank</option>
                            <option className='text-xl' bankName='Others'>Others</option>
                        </select>
                        {errors.bankCountry && <p className='text-red-600'>{errors.bankCountry?.message}</p>}
                    </div>

                    <input className='btn w-full mt-5' value='START MY CAMPAIGN' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default Campaign;