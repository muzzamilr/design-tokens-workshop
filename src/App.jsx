import {
	Button,
	Select,
	Radio,
	Checkbox,
	Input,
	ConfigProvider,
	Space,
	Layout,
	Switch,
	Calendar,
} from "antd";
import { useState } from "react";
import * as lightTheme from "./ant-tokens/light.json";
import * as darkTheme from "./ant-tokens/dark.json";
import { ButtonMod } from "./button";
const App = () => {
	const [dark, setDark] = useState(false);
	const handleChecked = (checked) => {
		if (checked) setDark(true);
		else setDark(false);
	};
	return (
		<ConfigProvider
			theme={{
				// algorithm: dark ? theme.darkAlgorithm : theme.lightAlgorithm,
				token: dark ? darkTheme : lightTheme,
			}}
		>
			<Layout
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				<Space direction="vertical" size={10}>
					<Switch
						checkedChildren="Light"
						unCheckedChildren="Dark"
						onChange={handleChecked}
					/>
					<Button>Button</Button>
					<ButtonMod />
					<Checkbox>Checkbox</Checkbox>
					<Radio>Radio</Radio>
					<Select
						placeholder="Select"
						options={[{ label: "Select", value: "Option" }]}
					/>
					<Calendar fullscreen={false} style={{ width: "300px" }} />
					<Input
						prefix={
							<MsgSvg
								color={dark ? darkTheme.colorPrimary : lightTheme.colorPrimary}
							/>
						}
						placeholder={"Input"}
					/>
				</Space>
			</Layout>
		</ConfigProvider>
	);
};
const MsgSvg = ({ color }) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.9512 0C13.024 0 14.056 0.471111 14.8152 1.31644C15.5752 2.16 16 3.29778 16 4.48889V11.5111C16 13.9911 14.184 16 11.9512 16H4.048C1.8152 16 0 13.9911 0 11.5111V4.48889C0 2.00889 1.8072 0 4.048 0H11.9512ZM12.856 4.62222C12.688 4.61244 12.528 4.67556 12.4072 4.8L8.8 8C8.336 8.42756 7.6712 8.42756 7.2 8L3.6 4.8C3.3512 4.59556 3.0072 4.62222 2.8 4.86222C2.584 5.10222 2.56 5.48444 2.7432 5.75111L2.848 5.86667L6.488 9.02222C6.936 9.41333 7.4792 9.62667 8.048 9.62667C8.6152 9.62667 9.168 9.41333 9.6152 9.02222L13.224 5.81333L13.288 5.74222C13.4792 5.48444 13.4792 5.11111 13.2792 4.85333C13.168 4.72089 13.0152 4.64 12.856 4.62222Z"
			fill={color}
		/>
	</svg>
);
export default App;
