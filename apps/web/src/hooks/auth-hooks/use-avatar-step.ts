import { useMemo, useState } from "react";
import { activate } from "@/http";
import { generateRandomAvatar } from "@/utils/random-avatars";
import { setAuth } from "@/store/auth-slice";
import { setAvatar } from "@/store/activate-slice";
import useRedux from "@/hooks/use-redux";
import { useUpdate } from "@/hooks/use-update";

const useAvatarStep = () => {
  const { useTypedDispatch, useTypedSelector } = useRedux();
  const dispatch = useTypedDispatch();
  const { name } = useTypedSelector((state) => state.activate);
  const { user } = useTypedSelector((state) => state.auth);

  const randomAvatar = user?.avatar || generateRandomAvatar();

  const [image, setImage] = useState<string | ArrayBuffer | null>(randomAvatar);
  const [avatarFile, setAvatarFile] = useState(randomAvatar);

  const randomAvatars = useMemo(() => {
    const avatars = [randomAvatar];
    for (let i = 0; i < 10; i++) {
      avatars.push(generateRandomAvatar());
    }
    return avatars;
  }, []);

  function captureImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  }

  const submit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatarFile);
    const response = await activate(formData);
    return response.data;
  };

  const onSuccess = (data: { email: string; hash: string }) => {
    dispatch(setAuth(data));
  };

  const { error, isLoading, update } = useUpdate(submit, { onSuccess });

  return {
    image,
    setImage,
    setAvatarFile,
    captureImage,
    randomAvatars,
    error,
    isLoading,
    update,
  };
};

export default useAvatarStep;
