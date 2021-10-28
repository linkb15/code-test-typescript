<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let formError: string;

	const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } = createForm({
		initialValues: {
			ethAddress: '',
			amount: '',
			otp: ''
		},
		validationSchema: yup.object().shape({
			otp: yup.string().label('OTP Authentication').required(),
			ethAddress: yup.string().label('ETH Address').required(),
			amount: yup.string().label('Amount to Send').required()
		}),
		onSubmit: async (values) => {
			try {
				formError = '';
				await new Promise((resolve, reject) =>
					setTimeout(() => {
						if (Math.random() < 0.5) {
							resolve(null);
							alert(JSON.stringify(values));
						} else {
							reject(new Error('Oops, something went wrong! Please try again later 🙏'));
						}
					}, 1000)
				);
			} catch (error) {
				formError = error.message;
			}
		}
	});
</script>

<svelte:head>
	<title>Fancy Form | Problem 2</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="flex-col justify-center hero-content lg:flex-row">
		<div class="text-center lg:text-left">
			<h1 class="mb-5 text-5xl font-bold">Hello there 👋!</h1>
			<p class="mb-5">
				Are you ready to send the tokens? Please fill up the form to send the tokens 🙏
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form on:submit={handleSubmit}>
					<div class="form-control">
						<label for="ethAddress" class="label">
							<span class="label-text">ETH Address</span>
						</label>
						<input
							type="text"
							name="ethAddress"
							placeholder="ETH Address"
							class="input input-bordered"
							on:change={handleChange}
							bind:value={$form.ethAddress}
							class:input-error={$errors.ethAddress}
						/>
						{#if $errors.ethAddress}
							<label for="ethAddress" class="label">
								<span class="label-text-alt text-error">{$errors.ethAddress}</span>
							</label>
						{/if}
					</div>
					<div class="form-control">
						<label for="amount" class="label">
							<span class="label-text">Amount to Send</span>
						</label>
						<input
							type="text"
							name="amount"
							placeholder="Amount to Send"
							class="input input-bordered"
							on:change={handleChange}
							bind:value={$form.amount}
							class:input-error={$errors.amount}
						/>
						{#if $errors.amount}
							<label for="amount" class="label">
								<span class="label-text-alt text-error">{$errors.amount}</span>
							</label>
						{/if}
					</div>
					<div class="form-control">
						<label for="otp" class="label">
							<span class="label-text">OTP Authentication</span>
						</label>
						<input
							type="text"
							name="otp"
							placeholder="OTP Authentication"
							class="input input-bordered"
							on:change={handleChange}
							bind:value={$form.otp}
							class:input-error={$errors.otp}
						/>
						{#if $errors.otp}
							<label for="otp" class="label">
								<span class="label-text-alt text-error">{$errors.otp}</span>
							</label>
						{/if}
					</div>
					<div class="form-control mt-6">
						<button
							type="submit"
							disabled={!$isValid}
							class="btn btn-primary"
							class:btn-disabled={!$isValid}
						>
							{#if $isSubmitting}SENDING ...{:else}SEND TOKENS{/if}
						</button>
					</div>
					{#if formError}
						<div class="alert alert-error mt-4">
							<div class="flex-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="w-6 h-6 mx-2 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
								<label>{formError}</label>
							</div>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
