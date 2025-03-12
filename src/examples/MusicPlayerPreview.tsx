import { MouseEvent, useState } from "react";
import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
  SearchControl,
  Card,
  CardBody,
  privateApis,
} from "@wordpress/components";
import {
  arrowRight,
  arrowLeft,
  moreVertical,
  plus,
  download,
  wordpress,
  starEmpty,
  starFilled,
  Icon,
} from "@wordpress/icons";
import { unlock } from "../lock-unlock";

const { Badge, Tabs } = unlock(privateApis);

// Sample music data
const playlists = [
  { id: 1, name: "Recently Added", count: 24 },
  { id: 2, name: "Recently Played", count: 13 },
  { id: 3, name: "Top Songs", count: 16 },
  { id: 4, name: "Favorites", count: 8 },
];

const categories = [
  { id: 1, name: "Indie Rock" },
  { id: 2, name: "Electronic" },
  { id: 3, name: "Hip-Hop" },
  { id: 4, name: "Jazz" },
  { id: 5, name: "Classical" },
];

const albums = [
  {
    id: 1,
    title: "Constellations",
    artist: "Aurora",
    coverColor: "#dbeafe",
    year: "2023",
    songCount: 12,
    cover: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Tides",
    artist: "Coastal Waves",
    coverColor: "#e0f2fe",
    year: "2022",
    songCount: 10,
    cover: "https://picsum.photos/200/300?2",
  },
  {
    id: 3,
    title: "Elevations",
    artist: "Summit",
    coverColor: "#f0f9ff",
    year: "2023",
    songCount: 8,
    cover: "https://picsum.photos/200/300?3",
  },
  {
    id: 4,
    title: "Dunes",
    artist: "Sandstorm",
    coverColor: "#eff6ff",
    year: "2021",
    songCount: 9,
    cover: "https://picsum.photos/200/300?4",
  },
];

const songs = [
  {
    id: 1,
    title: "Northern Lights",
    artist: "Aurora",
    album: "Constellations",
    duration: "3:42",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Ocean Blue",
    artist: "Coastal Waves",
    album: "Tides",
    duration: "4:17",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Mountain Peak",
    artist: "Summit",
    album: "Elevations",
    duration: "2:58",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Desert Wind",
    artist: "Sandstorm",
    album: "Dunes",
    duration: "3:32",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Forest Echo",
    artist: "Woodland",
    album: "Canopy",
    duration: "5:03",
    isFavorite: true,
  },
  {
    id: 6,
    title: "City Lights",
    artist: "Urban",
    album: "Metropolis",
    duration: "4:21",
    isFavorite: false,
  },
  {
    id: 7,
    title: "River Flow",
    artist: "Current",
    album: "Downstream",
    duration: "3:10",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Starry Night",
    artist: "Cosmos",
    album: "Galaxy",
    duration: "6:42",
    isFavorite: true,
  },
];

const MusicPlayerPreview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlaylist, setActivePlaylist] = useState(1);
  const [selectedSong, setSelectedSong] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setSelectedSong((prev) => (prev > 1 ? prev - 1 : songs.length));
  };

  const handleNext = () => {
    setSelectedSong((prev) => (prev < songs.length ? prev + 1 : 1));
  };

  const handleToggleFavorite = (songId: number) => {
    // In a real app, this would update the song data
    console.log("Toggle favorite for song:", songId);
  };

  const currentSong =
    songs.find((song) => song.id === selectedSong) || songs[0];

  return (
    <VStack spacing={0}>
      <HStack
        spacing={4}
        style={{
          padding: "8px 16px",
          borderBottom: "1px solid #e0e0e0",
        }}
        alignment="center"
      >
        <Text size="16" weight="600">
          Music
        </Text>
        <HStack justify="flex-start" style={{ flexGrow: 1 }}>
          <Button variant="tertiary" onClick={() => {}}>
            File
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Edit
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            View
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            Account
          </Button>
        </HStack>
      </HStack>

      <HStack alignment="stretch" spacing={0}>
        {/* Sidebar */}
        <VStack
          spacing={8}
          style={{
            width: "240px",
            borderRight: "1px solid #e5e7eb",
            padding: "16px",
            height: "100%",
          }}
        >
          {/* Search */}
          <SearchControl
            onChange={setSearchQuery}
            value={searchQuery}
            placeholder="Search music..."
            __nextHasNoMarginBottom
          />

          {/* Library Section */}
          <VStack spacing={4}>
            <Text
              size="11"
              weight="600"
              style={{
                textTransform: "uppercase",
                color: "#6b7280",
                paddingLeft: "12px",
              }}
            >
              Library
            </Text>

            <VStack spacing={1}>
              {playlists.map((playlist) => (
                <Button
                  key={playlist.id}
                  variant={
                    activePlaylist === playlist.id ? "secondary" : "tertiary"
                  }
                  onClick={() => setActivePlaylist(playlist.id)}
                  __next40pxDefaultSize
                  style={{
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "8px 12px",
                    height: "auto",
                  }}
                >
                  <Text
                    size="13"
                    weight={activePlaylist === playlist.id ? "600" : "normal"}
                  >
                    {playlist.name}
                  </Text>
                  <Badge>{playlist.count}</Badge>
                </Button>
              ))}
            </VStack>
          </VStack>

          {/* Categories */}
          <VStack spacing={4}>
            <Text
              size="11"
              weight="600"
              style={{
                textTransform: "uppercase",
                color: "#6b7280",
                paddingLeft: "12px",
              }}
            >
              Categories
            </Text>

            <VStack spacing={1}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="tertiary"
                  __next40pxDefaultSize
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    height: "auto",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text size="13">{category.name}</Text>
                </Button>
              ))}
            </VStack>
          </VStack>
        </VStack>

        {/* Main Content */}
        <VStack style={{ flex: 1, height: "100%" }}>
          {/* Content Header */}
          <HStack
            justify="space-between"
            style={{
              borderBottom: "1px solid #e5e7eb",
              padding: "0 32px",
            }}
          >
            <HStack>
              <Tabs onActiveTabIdChange={() => {}} onSelect={() => {}}>
                <Tabs.TabList>
                  <Tabs.Tab tabId="music">Music</Tabs.Tab>
                  <Tabs.Tab tabId="podcasts">Podcasts</Tabs.Tab>
                  <Tabs.Tab tabId="live">Live</Tabs.Tab>
                </Tabs.TabList>
              </Tabs>
            </HStack>
            <HStack spacing={1} style={{ width: "auto", flexShrink: 0 }}>
              <Button icon={plus} variant="primary" size="compact">
                Add music
              </Button>
              <Button
                icon={moreVertical}
                variant="tertiary"
                label="More options"
                size="compact"
              />
            </HStack>
          </HStack>

          {/* Main Content Area */}
          <VStack spacing={8} style={{ padding: "16px 32px" }}>
            <VStack spacing={1}>
              <Text size="title">Featured Albums</Text>
              <Text>Top picks for you. Updated daily.</Text>
            </VStack>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {albums.map((album) => (
                <VStack key={album.id}>
                  <div
                    style={{
                      height: "300px",
                      backgroundColor: album.coverColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      borderRadius: "4px",
                      backgroundImage: `url(${album.cover})`,
                      backgroundSize: "cover",
                    }}
                  />
                  <VStack spacing={0} style={{ flexGrow: 1 }}>
                    <Text weight="600">{album.title}</Text>
                    <Text size="small" variant="muted">
                      {album.artist}
                    </Text>
                    <Text size="caption">
                      {album.year} • {album.songCount} songs
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </div>

            {/* Column Headers */}
            <VStack spacing={0} style={{ marginTop: "16px" }}>
              <HStack
                justify="space-between"
                style={{
                  padding: "0 16px 8px 16px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Text size="12" weight="600" style={{ width: "40px" }}>
                  #
                </Text>
                <Text size="12" weight="600" style={{ flex: 3 }}>
                  Title
                </Text>
                <Text size="12" weight="600" style={{ flex: 2 }}>
                  Album
                </Text>
                <Text
                  size="12"
                  weight="600"
                  style={{ flex: 1, textAlign: "right" }}
                >
                  Duration
                </Text>
                <div style={{ width: "32px" }}></div>
              </HStack>

              {/* Songs */}
              {songs.map((song, index) => (
                <HStack
                  key={song.id}
                  justify="space-between"
                  alignment="center"
                  style={{
                    padding: "12px 16px",
                    borderRadius: "4px",
                    backgroundColor:
                      selectedSong === song.id ? "#f3f4f6" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedSong(song.id)}
                >
                  <Text style={{ width: "40px", color: "#6b7280" }}>
                    {index + 1}
                  </Text>
                  <VStack spacing={0} style={{ flex: 3 }}>
                    <Text weight={selectedSong === song.id ? "600" : "normal"}>
                      {song.title}
                    </Text>
                    <Text size="13" style={{ color: "#6b7280" }}>
                      {song.artist}
                    </Text>
                  </VStack>
                  <Text size="13" style={{ flex: 2, color: "#6b7280" }}>
                    {song.album}
                  </Text>
                  <Text
                    size="13"
                    style={{ flex: 1, textAlign: "right", color: "#6b7280" }}
                  >
                    {song.duration}
                  </Text>
                  <Button
                    icon={song.isFavorite ? starFilled : starEmpty}
                    variant="tertiary"
                    onClick={(e: MouseEvent<HTMLElement>) => {
                      e.stopPropagation();
                      handleToggleFavorite(song.id);
                    }}
                    style={{ width: "32px" }}
                    __next40pxDefaultSize
                  />
                </HStack>
              ))}
            </VStack>
          </VStack>

          {/* Player Controls */}
          <Card
            size="small"
            style={{
              margin: "32px",
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
            }}
          >
            <CardBody>
              <HStack justify="space-between">
                {/* Song Info */}
                <HStack spacing={2} justify="flex-start">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#dbeafe",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon icon={wordpress} />
                  </div>
                  <VStack spacing={0}>
                    <Text weight="600">{currentSong.title}</Text>
                    <Text size="13" style={{ color: "#6b7280" }}>
                      {currentSong.artist}
                    </Text>
                  </VStack>
                </HStack>

                {/* Controls */}
                <HStack spacing={2} style={{ flexShrink: 0, width: "auto" }}>
                  <Button
                    icon={arrowLeft}
                    variant="tertiary"
                    onClick={handlePrevious}
                    label="Previous"
                    __next40pxDefaultSize
                  />
                  <Button
                    variant="primary"
                    onClick={handleTogglePlay}
                    __next40pxDefaultSize
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button
                    icon={arrowRight}
                    variant="tertiary"
                    onClick={handleNext}
                    label="Next"
                    __next40pxDefaultSize
                  />
                </HStack>

                {/* Download */}
                <Button
                  icon={download}
                  variant="tertiary"
                  label="Download"
                  __next40pxDefaultSize
                />
              </HStack>
            </CardBody>
          </Card>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MusicPlayerPreview;
