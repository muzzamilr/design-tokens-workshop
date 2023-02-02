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
function App() {
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
						checkedChildren="Dark"
						unCheckedChildren="Light"
						onChange={handleChecked}
					/>
					<Button>Button</Button>
					<Checkbox>Checkbox</Checkbox>
					<Radio>Radio</Radio>
					<Select
						placeholder="Select"
						options={[{ label: "Select", value: "Option" }]}
					/>
					<Input placeholder="input" />
					<Calendar fullscreen={false} style={{ width: "300px" }} />
				</Space>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
