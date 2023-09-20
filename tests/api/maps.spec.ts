import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import app from "../../app";
import Map from "../../models/Map";

chai.use(chaiHttp);

const mockMaps = [
  // Maps for Blue Whale
  {
    _id: 1,
    url: "http://some-url.com/blue-whale-map1",
    whaleId: 1,
    startMonth: 1,
    endMonth: 6,
  },
  {
    _id: 2,
    url: "http://some-url.com/blue-whale-map2",
    whaleId: 1,
    startMonth: 7,
    endMonth: 12,
  },
  // Maps for Humpback Whale
  {
    _id: 3,
    url: "http://some-url.com/humpback-whale-map1",
    whaleId: 2,
    startMonth: 1,
    endMonth: 5,
  },
  {
    _id: 4,
    url: "http://some-url.com/humpback-whale-map2",
    whaleId: 2,
    startMonth: 6,
    endMonth: 12,
  },
  // Maps for Killer Whale
  {
    _id: 5,
    url: "http://some-url.com/killer-whale-map1",
    whaleId: 2,
    startMonth: 1,
    endMonth: 12,
  },
];
describe("Maps API", () => {
  let findStub: sinon.SinonStub;

  beforeEach(() => {
    findStub = sinon.stub(Map, "find");
  });

  afterEach(() => {
    findStub.restore();
  });

  describe("GET /api/v1/maps/getAll", () => {
    it("should fetch all maps", async () => {
      findStub.resolves(mockMaps);

      const res = await chai.request(app).get("/api/v1/maps/getAll");

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(mockMaps);
    });
  });

  describe("GET /api/v1/maps/whale/:whaleId", () => {
    it("should fetch maps by whaleId and optionally filter by month", async () => {
      const maxTest = 10;
      let testNum = 0;
      while (testNum < maxTest) {
        const whaleId = Math.floor(Math.random() * 4);
        const month = Math.floor(Math.random() * 12) + 1;
        findStub.resolves(mockMaps.filter((map) => map.whaleId === whaleId));

        const res = await chai
          .request(app)
          .get(`/api/v1/maps/whale/${whaleId}?month=${month}`);

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(
          mockMaps.filter(
            (map) =>
              map.whaleId === whaleId &&
              map.startMonth <= month &&
              map.endMonth >= month
          )
        );
        testNum++;
      }
    });

    it("should fetch maps by whaleId and filter by startMonth and endMonth", async () => {
      const whaleId = 1;
      findStub.resolves(mockMaps.filter((map) => map.whaleId === whaleId));

      const res = await chai
        .request(app)
        .get(`/api/v1/maps/whale/${whaleId}?startMonth=2&endMonth=4`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([
        {
          _id: 1,
          url: "http://some-url.com/blue-whale-map1",
          whaleId: 1,
          startMonth: 1,
          endMonth: 6,
        },
      ]);
    });

    // Additional test cases...
  });

  describe("GET /api/v1/maps/:mapId", () => {
    it("should fetch a single map by mapId", async () => {
      const singleMap = mockMaps[0];
      const findByIdStub = sinon.stub(Map, "findById").resolves(singleMap);

      const res = await chai.request(app).get(`/api/v1/maps/${singleMap._id}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(singleMap);

      findByIdStub.restore();
    });
  });
});
