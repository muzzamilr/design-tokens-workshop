import { Button, ConfigProvider, theme } from "antd";
const { useToken } = theme;
export const ButtonMod = () => {
  const { token } = useToken();
  return (
    <ConfigProvider
      theme={{
        inherit: false,
        components: {
          Button: {
            // borderRadius: token.borderRadiusSM,
            // colorPrimaryHover: token.colorPrimaryHover,
          },
        },
      }}
    >
      <Button size="middle" style={{ borderRadius: token.borderRadiusXS }}>
        Button
      </Button>
    </ConfigProvider>
  );
};
