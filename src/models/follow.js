import { post, get, put, _delete } from "@/lin/plugins/axios";

class Follow {
    async addFollow(params) {
        const res = await post(`v1/follow/${params.followUserId}`);
        return res;
    }

    async getFollow(params) {
        const res = await get(`v1/follow/${params.followUserId}`);
        return res;
    }


    async deleteFollow(params) {
        const res = await _delete(`v1/follow/${params.followUserId}`);
        return res;
    }

    async getFollows(params) {
        const res = await get("v1/follow", params);
        return res;
    }
}

export default new Follow();