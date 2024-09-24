package com.sist.back.controller;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sist.back.service.CategoryService;
import com.sist.back.service.PostService;
import com.sist.back.service.PostimgService;
import com.sist.back.service.SearchlogService;
import com.sist.back.service.TownService;
import com.sist.back.service.OfferService;
import com.sist.back.service.WishlistService;
import com.sist.back.util.FileRenameUtil;
import com.sist.back.vo.PostImgVO;
import com.sist.back.vo.PostVO;
import com.sist.back.vo.TownVO;
import com.sist.back.vo.OfferVO;
import com.sist.back.vo.categoryVO;
import com.sist.back.vo.PostCountVO;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/adpost")
public class PostController {

    @Autowired
    PostService p_service;

    @Autowired
    PostimgService postimgService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    TownService townService;

    @Autowired
    OfferService o_service;

    @Autowired
    WishlistService w_service;

    @Autowired
    SearchlogService searchlogService;

    @Value("${server.upload.post.image}")
    private String postImgPath;

    @RequestMapping("/all")
    public Map<String, Object> all() {
        Map<String, Object> res = new HashMap<>();
        res.put("post_list", p_service.all());
        return res;
    }

    @PostMapping("/searchpost")
    public Map<String, Object> searchpost(@RequestBody Map<String, Object> searchParams) {
        // 요청 파라미터 확인 (디버깅용)
        System.out.println("Received search parameters: " + searchParams);

        // searchParams에서 poststatus를 추출
        String poststatus = searchParams.get("poststatus") != null ? searchParams.get("poststatus").toString() : "";

        // 결과를 담을 Map 객체 생성
        Map<String, Object> res = new HashMap<>();
        List<PostVO> postList = new ArrayList<>();

        // "전체"인 경우 1, 2, 3, 4 상태의 게시글 조회
        if ("all".equals(poststatus)) {
            res.put("post_list", p_service.findAllByPoststatusIn(Arrays.asList(1, 2, 3, 4)));
        } else if (!poststatus.isEmpty()) {
            // 선택한 특정 상태만 조회
            res.put("post_list", p_service.findByPoststatus(Integer.parseInt(poststatus)));
        } else {
            // poststatus 값이 없거나 잘못된 경우 처리
            res.put("post_list", new ArrayList<>()); // 빈 리스트 반환 또는 기본 처리
        }

        // 결과를 JSON 형태로 반환
        return res;
    }

    @RequestMapping("/detail")
    public Map<String, Object> findById(int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("pvo", p_service.getPostByPostKey(postkey));
        e_map.put("tvo", p_service.getTownByPostKey(postkey));
        e_map.put("o_list", p_service.getOfferByPostKey(postkey));
        e_map.put("cr_list", p_service.getChatroomByPostKey(postkey));
        return e_map;
    }

    @RequestMapping("/cellList")
    public Map<String, Object> cellList(int userkey, int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("cellList", p_service.getCellListByUserPostKey(userkey, postkey));
        return e_map;
    }

    @RequestMapping("/pop_cate")
    public Map<String, Object> popCate(int categorykey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("popCateList", p_service.getPostByCategoryKey(categorykey));
        return e_map;
    }

    @RequestMapping("/priceOffer")
    public Map<String, Object> priceOffer(OfferVO ovo) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("result", o_service.makePriceOffer(ovo));
        return e_map;
    }

    @RequestMapping("/isLike")
    public Map<String, Object> isLike(int userkey, int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        Map<String, Object> w_map = new HashMap<>();
        w_map.put("userkey", userkey);
        w_map.put("postkey", postkey);
        int result = w_service.isLike(w_map);
        e_map.put("result", result);
        return e_map;
    }

    @RequestMapping("/toggleLike")
    public Map<String, Object> toggleLike(boolean isLike, int userkey, int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        Map<String, Object> w_map = new HashMap<>();
        w_map.put("userkey", userkey);
        w_map.put("postkey", postkey);
        e_map.put("result", w_service.toggleLike(isLike, w_map));
        return e_map;
    }

    // 조회수 증가
    @RequestMapping("/incViewqty")
    public Map<String, Object> incViewqty(int postkey) {
        Map<String, Object> e_map = new HashMap<>();
        e_map.put("postkey", postkey);
        e_map.put("result", p_service.incViewqty(postkey));
        e_map.put("viewqty", p_service.getViewqty(postkey));

        return e_map;
    }

    @RequestMapping("/remind")
    @ResponseBody
    public Map<String, Object> remind(String postkey) {
        Map<String, Object> map = new HashMap<>();

        int rst_ins = p_service.remindInsert(postkey);
        int rst_udt = p_service.remindUpdate(postkey);
        map.put("result_insert", rst_ins);
        map.put("result_update", rst_udt);

        return map;
    }

    @RequestMapping("/unhid")
    @ResponseBody
    public Map<String, Object> unhid(String postkey) {
        Map<String, Object> map = new HashMap<>();

        int rst_unhid = p_service.unhidPost(postkey);
        map.put("result_unhid", rst_unhid);

        return map;
    }

    @RequestMapping("/delLike")
    @ResponseBody
    public Map<String, Object> delLike(String likeWhat, String likeKey) {
        Map<String, Object> map = new HashMap<>();

        int rst_del = p_service.delLikeFromList(likeWhat, likeKey);
        map.put("result_delete", rst_del);

        return map;
    }

    // 이미지 파일 객체 가져오기
    @RequestMapping("/imageFile")
    public Map<String, Object> imageFile(String post_img) {
        Map<String, Object> imageFile = new HashMap<>();
        imageFile.put("post_img", post_img);
        Map<String, Object> image = new HashMap<>();
        if (post_img != null) {
            Path path = Paths.get(postImgPath);
            if (path.toString().contains("back")) {
                String pathString = path.toString();
                String changedPath = pathString.replace("back\\", "");
                path = Paths.get(changedPath);
            }
            String filePath = path.resolve(post_img).toString();
            File f = new File(filePath.substring(0, filePath.lastIndexOf("\\") + 1) + post_img);
            String fname = f.getName();
            if (f.exists()) {
                image.put("name", fname);
                image.put("imgurl", "/img/postimg/" + post_img);
                image.put("file", f);
            }
        }
        imageFile.put("imageFile", image);
        return imageFile;
    }

    // 사용자 - 중고거래 글 올리기
    @PostMapping("/write")
    public Map<String, Object> write(@ModelAttribute PostVO vo, List<MultipartFile> post_img, String region1,
            String region2, String region3) {
        System.out.println("거래희망!!" + vo.getHope_place() + "까지");
        if (region1 != null && !region1.equals("") && region2 != null && !region2.equals("") && region3 != null
                && !region3.equals("")) {
            Map<String, String> searchTown = new HashMap<>();
            TownVO tvo = new TownVO();
            tvo.setRegion1(region1);
            tvo.setRegion2(region2);
            tvo.setRegion3(region3);
            searchTown.put("region1", region1);
            searchTown.put("region2", region2);
            searchTown.put("region3", region3);
            TownVO townVO = townService.searchKeyByRegion(tvo);
            if (townVO == null) {
                vo.setTownkey(String.valueOf(townService.insertTown(tvo)));
            } else {
                vo.setTownkey(townVO.getTownkey());
            }
        }

        // lastprice 변동 후 가격 = 가격
        vo.setLastprice(vo.getPrice());
        // range
        // canbargain 체크박스가 on/off로만 나와서 직접 0, 1로 넣어줌
        if (vo.getCanbargain() != null && vo.getCanbargain().equals("on")) {
            vo.setCanbargain("1");
        } else {
            vo.setCanbargain("0");
        }
        // 조회수 0
        vo.setViewqty("0");

        int newPostKey = p_service.writePost(vo);

        // 파일 데이터 처리
        if (post_img != null) {
            for (MultipartFile f : post_img) {
                PostImgVO pivo = new PostImgVO();

                String realPath = "/img/postimg/";
                String fname = newPostKey + "-" + f.getOriginalFilename();

                Path path = Paths.get(postImgPath);
                if (path.toString().contains("back")) {
                    String pathString = path.toString();
                    String changedPath = pathString.replace("back\\", "");
                    path = Paths.get(changedPath);
                }
                String filePath = path.resolve(fname).toString();
                fname = FileRenameUtil.checkSameFileName(fname, filePath.substring(0,
                        filePath.lastIndexOf("\\")));
                pivo.setImgurl(realPath + fname);
                pivo.setPostkey(newPostKey);
                postimgService.addPostImg(pivo);

                // 파일 업로드
                try {
                    f.transferTo(new File(filePath.substring(0, filePath.lastIndexOf("\\") + 1) +
                            fname));
                } catch (Exception e) {
                }
            }
        }

        Map<String, Object> res = new HashMap<>();
        res.put("savePostKey", newPostKey);
        return res;
    }

    // 사용자 - 중고거래 글 수정하기
    @PostMapping("/edit")
    public Map<String, Object> edit(@ModelAttribute PostVO vo, List<MultipartFile> post_img, String region1,
            String region2, String region3) {

        if (region1 != null && !region1.equals("") && region2 != null && !region2.equals("") && region3 != null
                && !region3.equals("")) {
            Map<String, String> searchTown = new HashMap<>();
            TownVO tvo = new TownVO();
            tvo.setRegion1(region1);
            tvo.setRegion2(region2);
            tvo.setRegion3(region3);
            searchTown.put("region1", region1);
            searchTown.put("region2", region2);
            searchTown.put("region3", region3);
            TownVO townVO = townService.searchKeyByRegion(tvo);
            if (townVO == null) {
                vo.setTownkey(String.valueOf(townService.insertTown(tvo)));
            } else {
                vo.setTownkey(townVO.getTownkey());
            }
        }

        // lastprice 변동 후 가격 = 가격
        vo.setLastprice(vo.getPrice());
        // range
        // canbargain 체크박스가 on/off로만 나와서 직접 0, 1로 넣어줌
        if (vo.getCanbargain() != null && vo.getCanbargain().equals("on")) {
            vo.setCanbargain("1");
        } else {
            vo.setCanbargain("0");
        }

        // 파일 데이터 처리
        // 1) 기존 존재하던 이미지 삭제
        p_service.deletePostImg(vo.getPostkey());
        // 2) front/public/img/postimg 에 있는 이미지 삭제해야하는데 흠
        // 파일 데이터 처리
        if (post_img != null) {
            for (MultipartFile f : post_img) {
                PostImgVO pivo = new PostImgVO();

                String realPath = "/img/postimg/";
                String fname = vo.getPostkey() + "-" + f.getOriginalFilename();

                Path path = Paths.get(postImgPath);
                if (path.toString().contains("back")) {
                    String pathString = path.toString();
                    String changedPath = pathString.replace("back\\", "");
                    path = Paths.get(changedPath);
                }
                String filePath = path.resolve(fname).toString();
                fname = FileRenameUtil.checkSameFileName(fname, filePath.substring(0,
                        filePath.lastIndexOf("\\")));
                pivo.setImgurl(realPath + fname);
                pivo.setPostkey(Integer.parseInt(vo.getPostkey()));
                postimgService.addPostImg(pivo);

                // 파일 업로드
                try {
                    f.transferTo(new File(filePath.substring(0, filePath.lastIndexOf("\\") + 1) +
                            fname));
                } catch (Exception e) {
                }
            }
        }

        Map<String, Object> res = new HashMap<>();
        p_service.editPost(vo);
        res.put("savePostKey", vo.getPostkey());
        return res;
    }

    // 사용자 - 중고거래 글 목록
    @GetMapping("/search")
    public Map<String, Object> search(String userkey, String onsale, String search, String lastPostKey, String loc1,
            String[] loc2,
            String sort,
            String category,
            String minPrice,
            String maxPrice) {
        int howManyPost = 15;
        Map<String, Object> res = new HashMap<>();
        PostVO[] ar = p_service.search(userkey, onsale, search, lastPostKey, howManyPost, loc1, loc2, sort, category,
                minPrice,
                maxPrice);

        // 검색어 저장
        if (search != null && !search.equals("") && !search.trim().equals("")) {
            searchlogService.addSearchlog(search);
        }

        String lastKey = null;
        try {
            lastKey = ar[ar.length - 1].getPostkey();
        } catch (Exception e) {
        }
        res.put("res_search", ar);
        res.put("lastPostKey", lastKey);

        return res;
    }

    // 사용자 - 임시저장 게시글 불러오기
    @GetMapping("/searchTemp")
    public Map<String, Object> searchTemp(String userkey) {
        Map<String, Object> res = new HashMap<>();
        PostVO vo = p_service.searchTemp(userkey);

        res.put("res_searchTemp", vo);

        return res;
    }

    // 사용자 - 메인 상품 뿌리기
    @GetMapping("/main")
    public Map<String, Object> main(String region1, String region2) {
        categoryVO[] c_list = categoryService.all();
        // 중복되지 않는 랜덤 숫자 3개를 저장할 리스트
        List<Integer> randomCategories = new ArrayList<>();
        Random random = new Random();

        // 중복되지 않는 숫자 3개를 뽑는 반복문
        while (randomCategories.size() < 3) {
            int randomNum = random.nextInt(c_list.length); // 1부터 cnt까지 랜덤 숫자 생성
            int key = Integer.parseInt(c_list[randomNum].getCategorykey());
            if (!randomCategories.contains(key)) {
                randomCategories.add(key); // 중복되지 않는 경우 추가
            }
        }

        List<PostVO>[] tmp = new List[3]; // 배열 초기화
        // 배열을 리스트로 변환하여 할당
        tmp[0] = Arrays.asList(p_service.main(String.valueOf(randomCategories.get(0)), region1, region2));
        tmp[1] = Arrays.asList(p_service.main(String.valueOf(randomCategories.get(1)), region1, region2));
        tmp[2] = Arrays.asList(p_service.main(String.valueOf(randomCategories.get(2)), region1, region2));

        Map<String, Object> res = new HashMap<>();
        res.put("free_list", p_service.main("free", region1, region2));
        res.put("cate_list", tmp);
        return res;
    }

    // 관리자 게시글 현황 확인
    @RequestMapping("/postcount")
    @ResponseBody
    public Map<String, Object> getPostCount() {
        Map<String, Object> map = new HashMap<>();
        PostCountVO pcvo = p_service.postForPostAdmin();
        map.put("pcvo", pcvo);
        return map;
    }

    @RequestMapping("/hidePost")
    @ResponseBody
    public Map<String, Object> hidePost(String postkey) {
        Map<String, Object> map = new HashMap<>();
        int cnt = p_service.hidePost(postkey);
        map.put("cnt", cnt);
        return map;
    }
}