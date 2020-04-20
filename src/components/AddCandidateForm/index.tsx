import React, { useCallback, ChangeEvent } from 'react';
import {
	InputAdornment,
	IconButton,
	Input,
	InputLabel,
	FormControl,
	Grid,
	Button,
	Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { StyledWrapper } from './styled';
import { Candidate, CANDIDATE_STATE } from 'models/candidate';
import { v4 as uuidv4 } from 'uuid';

interface AddCandidateFormProps {
	onAddNewCandidate: (candidate: Candidate) => void;
}

interface AddCandidateFormFields {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	showPassword: boolean;
}

const AddCandidateForm: React.FC<AddCandidateFormProps> = (
	props: AddCandidateFormProps,
): JSX.Element => {
	const { onAddNewCandidate } = props;
	const [values, setValues] = React.useState<AddCandidateFormFields>({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		showPassword: false,
	});

	const handleClickShowPassword = useCallback(() => {
		setValues({ ...values, showPassword: !values.showPassword });
	}, [setValues, values]);

	const handleMouseDownPassword = useCallback((event) => {
		event.preventDefault();
	}, []);

	const handleChange = (prop: string) => (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		setValues({ ...values, [prop]: event?.target.value });
	};

	const onSubmitValues = useCallback(() => {
		const candidate = {
			fullName: `${values.firstName} ${values.lastName}`,
			email: values.email,
			password: values.password,
			phone: values.phoneNumber,
			avatar: '',
			// eslint-disable-next-line @typescript-eslint/camelcase
			applied_on: new Date().toISOString(),
			state: CANDIDATE_STATE.IN_REVIEW,
			id: '',
		};
		candidate.id = uuidv4();
		onAddNewCandidate(candidate);
	}, [values]);

	return (
		<form>
			<StyledWrapper>
				<Grid container wrap="wrap" spacing={5}>
					<Grid item xs={12}>
						<Typography variant="h5">Add resume</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel htmlFor="email">Your E-mail</InputLabel>
							<Input
								fullWidth={true}
								id="email"
								value={values.email}
								onChange={handleChange('email')}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel htmlFor="pasword">
								Set Pasword
							</InputLabel>
							<Input
								type={values.showPassword ? 'text' : 'password'}
								fullWidth={true}
								id="pasword"
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
										>
											{values.showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={5}>
							<Grid item xs={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="firstName">
										First name
									</InputLabel>
									<Input
										fullWidth={true}
										id="firstName"
										value={values.firstName}
										onChange={handleChange('firstName')}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl fullWidth>
									<InputLabel htmlFor="lastName">
										Last name
									</InputLabel>
									<Input
										fullWidth={true}
										id="lastName"
										value={values.lastName}
										onChange={handleChange('lastName')}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel htmlFor="phoneNumber">
								Phone number
							</InputLabel>
							<Input
								fullWidth={true}
								id="phoneNumber"
								onChange={handleChange('phoneNumber')}
								value={values.phoneNumber}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Button
							onClick={onSubmitValues}
							variant="contained"
							color="primary"
						>
							Add resume
						</Button>
					</Grid>
				</Grid>
			</StyledWrapper>
		</form>
	);
};

export default AddCandidateForm;
