<template>
  <div class="Captcha-wrapper_mYEHRq0" data-spm-anchor-id="a2ogi.12119171.0.i3">
    <div class="Captcha-dialog_S_fJM6F">
      <p class="Captcha-title_3K2-BwV" data-spm-anchor-id="a2ogi.12119171.0.i2">请填写图形验证码</p>
      <div class="Captcha-captcha_1sciDlS">
        <div>
          <input />
        </div>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAYAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1PVby9uNYFjZSmMgclTir+kXV55r22oMBMo+TPVh6/wAqzIIY7bW4RpsQhjmgzGrxlfLHYbDgqB028Y6cVotY607o7XlmWQ5UmA5B/OtHbY2ko25dP1CG4nbxLPCZXMSqMJngVpxrILiUtOHjbG1O6/5/z7cPeT6zZ61cBbu2MzgLu8o4/nWvpui65aEznUbcySDLboif60NBOkkr8y2/roV5tKhm8SLaxxCO3RFUIgwFUDAAHYDpVrSXey1yaxXi3OSqDoDWbdTavYa+0j3ltzHhn8k4A+maXR31XUNWnuIL22I28MYeD+tO2hbi3HVq1i+0yWXiieV32RkZc+vFdJBPFcxLLE4ZG5BFcXPp+oXPiiOK6uYHVgNwWMjI/OtvSALXU7qzViYxhkB7D0qWjOpBWTT1sO1nT7p51vbM5kRcbe5qHw9e3k6PbTpKRGSplbqD/dPuKKKL6EKV4NPoCaNcS3F6Lpt+8DZLjk4q5ol608MltKSZ7c7HzRRRug5ueLv0KN1Ck3imOKVNysmdp7j/ACK2INNtLWfzYIVibGDs4B+o/wA9/WiikxTbSS8jN1SwvTqsV/aBW2Ljbnk1H4eguBd3k1zG6uzZAccqD2HtRRRfQPaPl5T/2Q=="
        />
      </div>
      <p class="Captcha-error_2_9Csz_">
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAxZJREFUSA21V8tqFEEUPdUGYXytfKCILvQbMkjyAQoqbnThKhkwqB8g7jJRF+IHaFDIZBniwkcSdC1R7Fm7040ulMSAoBLBR8pzb1cz7Ux1T/VMW1DTNVX3nlOPW/feMihRbAO7YTCKPzjA7yFVtfiIbViDRdvM4VsonOknaJvYjveYotxp1jHWNknWEZFQyhYnYLCfrVHWl6zLOIr7pomfbOeWXGJrCdfABEma1I75bxE1PDd38d2HZq9iF37gJOUvcLxO+SbmMG8MezzFS2ynsAO/sED5vQS4xi1c9ejmdvFIxkl3hwIbnOxF32R7iHXmmzwrgyXTwtlc9IABO4lZTmCcx3Ki+/yjrL4jfU3SW8OSCi4xLhPrEe3gq+5ilixty5lyhkt2AvfSvqIvZVcou1wkk45R9qlWsZvuQpAGa/BZUtZK7cbJ+0/iV6yT6bhutV4ZYJpncT0dqPxLI+U0m46LVFI+4BJ/47LWq7qBPw47dj7BEVuc4e4vBmIMLpZwiCNCpG5QPBKdw+CIgZoJx5hwRlypuLq275IHwgWLOY62cEa8Y+JnPwdrDysofp5BRlYsUSZx+MOChuhLcCHnP54rRK8qmYh3S1abxNaqUItwJIySc4QXap3nvK9INmdsJae/uFtid4Q1o9dJVl3Dwf9t2S5mf9Iz1nBl6aM3cap4qhWMSqLALEU4E+OKNMqcrwC6GCLJTjSiJcRH8IAadc0cilV1lLH1GCPNW61sB6jAYdclHxN5JXaJ2QyN7HYICH7jHC3zuFZphxRJhZiHpUlg5x630OLAF67iSV+cETym7Dut0u5TiDlLkQ1J/ryikp64AH/DKzBAJ0lvEvONWnRGvycVcSYfcxtfmHlcyciWburuWSaMEfbo7ckgdLbadepdrmlefJgzXQ01uAymGpLosi/ic2BnN6nI9qw4BdCEPsmRptkXsz5ktv0sz8m4neok9MAMraZVKqFPyeWrOZKkRlt8whjmyPKEScJoGtHEz4vLTZ4wzMfB65laL/u9JXfFPml1r5I4SAzPPtrE35d8tP0F950EOn4oQmQAAAAASUVORK5CYII="
          />验证码错误，请重新填写
        </span>
      </p>
      <div class="Captcha-operation_VaFJBx-">
        <button class="Captcha-cancel_32LMCMX">取消</button>
        <button class="Captcha-ok_2tFUQc1">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.Captcha-wrapper_mYEHRq0 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.14rem;
  .Captcha-dialog_S_fJM6F {
    width: 2.78rem;
    height: 1.8rem;
    background: hsla(0, 0%, 100%, 0.9);
    border-radius: 0.04rem;
    animation: Captcha-showAlert_24ewgzq 0.3s;
    .Captcha-title_3K2-BwV {
      margin: 0.21rem 0;
      text-align: center;
      font-size: 0.192rem;
      font-weight: 700;
      color: #000;
      height: 0.23rem;
    }
    .Captcha-captcha_1sciDlS {
      margin: 0 0.134rem;
      background: #fff;
      display: flex;
      input {
        width: 1.46rem;
        height: 0.41rem;
        border: none;
        font-size: 0.16rem;
        padding: 0 0.115rem;
        box-sizing: border-box;
      }
      img {
        margin: 0.04rem;
        width: 0.96rem;
        height: 0.32rem;
      }
    }
    .Captcha-error_2_9Csz_ {
      width: 2.49rem;
      height: 0.1247rem;
      margin: 0.09rem 0.14rem;
    }
    .Captcha-operation_VaFJBx- {
      border-top: 0.01rem solid #ddd;
      display: flex;
      .Captcha-cancel_32LMCMX {
        width: 50%;
        height: 0.42rem;
        border: none;
        border-right: 0.01rem solid #ddd;
        color: #666;
        font-size: 0.16rem;
        background: none;
      }
      .Captcha-ok_2tFUQc1 {
        width: 50%;
        border: none;
        height: 0.42rem;
        color: #3190e8;
        font-size: 0.16rem;
        background: none;
        font-weight: 700;
      }
    }
    .Captcha-error_2_9Csz_ {
      font-size: 0;
      span {
        color: #ff6000;
        font-weight: 400;
        font-size: 0.1248rem;
        line-height: 0.1248rem;
        vertical-align: middle;
        img {
          width: 0.1439rem;
          height: 0.1439rem;
          margin-right: 0.028rem;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>